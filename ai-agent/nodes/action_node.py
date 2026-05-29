from tools.embedding import get_embedding
import requests

from services.entity_extractor import extract_entities, parse_request_schema
from services.response_builder import (
    build_api,
    build_clarification,
    build_navigation,
    build_text,
    join_ui_route,
    list_placeholders,
    substitute_template,
)
from services.vector_search import search_action_rows

from services.pending_action_service import (
    save_pending_action
)


def _clarify_message(param: str) -> str:
    labels = {
        "requisition_no": "Please provide a requisition number (e.g. REQ123).",
        "po_no": "Please provide a purchase order number (e.g. PO456).",
        "invoice_no": "Please provide an invoice number (e.g. INV789).",
    }
    return labels.get(param, f"Please provide {param}.")


def action_node(state):

    query = state["user_message"]
    print("[ASK][pipeline][graph:action] STEP — enter action_node")
    print("[ASK][pipeline][graph:action] STEP — query:", query)

    embedding = get_embedding(query)
    print("[ASK][pipeline][graph:action] STEP — embedding dims:", len(embedding))

    rows = search_action_rows(embedding, limit=1)

    if not rows:
        print("[ASK][pipeline][graph:action] STEP — no api_action_vectors match")
        sr = build_text("No API found")
        print("[ASK][pipeline][graph:action] STEP — exit action_node (terminal, no API row)")
        return {"response": sr["message"], "structured_response": sr}

    row = rows[0]
    print("[ASK][pipeline][graph:action] STEP — top action row sample_query:", row.get("sample_query"))

    request_schema = parse_request_schema(row.get("request_schema"))
    route_template = (row.get("route_template") or "").strip()
    if row.get("response_type"):
        response_type = str(row.get("response_type")).lower()
    elif row.get("execution_type"):
        response_type = str(row.get("execution_type")).lower()
    elif route_template:
        response_type = "navigation"
    else:
        response_type = "api"
    ui_route = (row.get("ui_route") or "").strip()
    api_endpoint = row.get("api_endpoint") or ""
    method = (row.get("http_method") or "GET").upper()

    entities = extract_entities(query)

    explicit_required = request_schema.get("required_params")
    if isinstance(explicit_required, list) and explicit_required:
        required = [str(x) for x in explicit_required]
    else:
        required = list_placeholders(route_template, api_endpoint)

    missing = [p for p in required if not entities.get(p)]
    if missing:

        save_pending_action(
            user_id=state["user_id"],
            action_name=row.get(
                "action_id",
                "unknown_action"
            ),
            original_query=query,
            missing_param=missing[0]
        )

        msg = _clarify_message(
            missing[0]
        )

        sr = build_clarification(
            missing,
            msg
        )

        return {
            "response": sr["message"],
            "structured_response": sr
        }

    filled_route = None
    if route_template:
        filled = substitute_template(route_template, entities)
        if "{" in filled:
            inner_missing = list_placeholders(filled)
            if inner_missing:
                sr = build_clarification(inner_missing, _clarify_message(inner_missing[0]))
                print("[ASK][pipeline][graph:action] STEP — exit action_node (terminal, inner clarification)")
                return {"response": sr["message"], "structured_response": sr}
        filled_route = join_ui_route(ui_route, filled) if ui_route else filled

    filled_endpoint = substitute_template(api_endpoint, entities) if api_endpoint else ""

    # Explicit API rows (e.g. forecasts list) — always HTTP
    if response_type == "api":
        pass  # fall through to HTTP below
    elif route_template or response_type in ("navigation", "link", "nav"):
        # UI navigation: route_template like /approvals/{requisition_no}, optional ui_route prefix
        if not filled_route:
            if route_template:
                filled = substitute_template(route_template, entities)
                filled_route = join_ui_route(ui_route, filled) if ui_route else filled
            elif ui_route:
                filled_route = ui_route
            else:
                sr = build_text("Navigation route not configured.")
                print("[ASK][pipeline][graph:action] STEP — exit action_node (terminal, nav misconfigured)")
                return {"response": sr["message"], "structured_response": sr}
        msg = row.get("action_description") or row.get("sample_query") or "Opening the requested screen."
        sr = build_navigation(msg, filled_route, filled_endpoint or None)
        print("[ASK][pipeline][graph:action] STEP — navigation response built")
        print("[ASK][pipeline][graph:action] STEP — exit action_node (terminal, navigation)")
        return {"response": sr["message"], "structured_response": sr}

    # API execution (no route_template, or legacy rows)
    # API execution
    endpoint = filled_endpoint or api_endpoint

    # -------------------------------------------------
    # FIX SELF-CALL LOOP
    # -------------------------------------------------
    endpoint = endpoint.replace(
        "http://localhost:8000",
        "http://localhost:4000"
    )

    print("[ASK][pipeline][graph:action] STEP — HTTP", method, endpoint)

    if not endpoint or not method:
        print("[ASK][pipeline][graph:action] STEP — missing endpoint or method in row")

        sr = build_text("API configuration missing")

        return {
            "response": sr["message"],
            "structured_response": sr
        }

    try:

        headers = {
            "Content-Type": "application/json"
        }

        if method == "GET":

            res = requests.get(
                endpoint,
                headers=headers,
                timeout=15
            )

        else:

            res = requests.post(
                endpoint,
                headers=headers,
                json=entities,
                timeout=15
            )

        print(
            "[ASK][pipeline][graph:action] STEP — API response status:",
            res.status_code
        )

        try:
            body = res.json()
        except Exception:
            body = res.text

        sr = build_api(
            str(body)[:4000],
            endpoint
        )

        if filled_route:
            sr["route"] = filled_route

        # -----------------------------------------
        # USER FRIENDLY SUCCESS MESSAGE
        # -----------------------------------------
        message = str(body)

        if isinstance(body, dict):

            # Purchase Order Approval
            if (
                body.get("success") is True
                and body.get("poNumber")
                and body.get("status")
            ):

                message = (
                    f"Purchase Order "
                    f"{body['poNumber']} "
                    f"{body['status']} successfully."
                )

            # Generic success response
            elif body.get("success") is True:

                if body.get("status"):

                    message = (
                        f"Operation completed successfully. "
                        f"Status: {body['status']}"
                    )

                else:

                    message = (
                        "Operation completed successfully."
                    )

        print(
            "[ASK][pipeline][graph:action] STEP — exit action_node (terminal, API success)"
        )

        return {
            "response": message,
            "structured_response": sr
        }

    except Exception as e:

        print(
            "[ASK][pipeline][graph:action] STEP — API exception:",
            str(e)
        )

        sr = build_text(
            f"API call failed: {str(e)}"
        )

        return {
            "response": sr["message"],
            "structured_response": sr
        }