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


def _clarify_message(param: str) -> str:
    labels = {
        "requisition_no": "Please provide a requisition number (e.g. REQ123).",
        "po_no": "Please provide a purchase order number (e.g. PO456).",
        "invoice_no": "Please provide an invoice number (e.g. INV789).",
    }
    return labels.get(param, f"Please provide {param}.")


def action_node(state):

    query = state["user_message"]
    print("[ASK][graph][action] Entered action node. query:", query)

    embedding = get_embedding(query)
    print("[ASK][graph][action] Generated embedding dims:", len(embedding))

    rows = search_action_rows(embedding, limit=1)

    if not rows:
        print("[ASK][graph][action] No matching API action row found.")
        sr = build_text("No API found")
        return {"response": sr["message"], "structured_response": sr}

    row = rows[0]
    print("[ASK][graph][action] Top action row:", row)

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
        msg = _clarify_message(missing[0])
        sr = build_clarification(missing, msg)
        print("[ASK][graph][action] Missing params:", missing)
        return {"response": sr["message"], "structured_response": sr}

    filled_route = None
    if route_template:
        filled = substitute_template(route_template, entities)
        if "{" in filled:
            inner_missing = list_placeholders(filled)
            if inner_missing:
                sr = build_clarification(inner_missing, _clarify_message(inner_missing[0]))
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
                return {"response": sr["message"], "structured_response": sr}
        msg = row.get("action_description") or row.get("sample_query") or "Opening the requested screen."
        sr = build_navigation(msg, filled_route, filled_endpoint or None)
        print("[ASK][graph][action] Navigation response:", sr)
        return {"response": sr["message"], "structured_response": sr}

    # API execution (no route_template, or legacy rows)
    endpoint = filled_endpoint or api_endpoint
    print("[ASK][graph][action] Calling API:", method, endpoint)

    if not endpoint or not method:
        print("[ASK][graph][action] Missing endpoint or method in row.")
        sr = build_text("API configuration missing")
        return {"response": sr["message"], "structured_response": sr}

    try:
        if method == "GET":
            res = requests.get(endpoint, timeout=60)
        else:
            res = requests.post(endpoint, timeout=60)
        print("[ASK][graph][action] API status:", res.status_code)
        body = res.text or ""
        sr = build_api(body[:4000], endpoint)
        if filled_route:
            sr["route"] = filled_route
        return {"response": body, "structured_response": sr}

    except Exception as e:
        print("[ASK][graph][action] API Error:", e)
        sr = build_text(f"API call failed: {e}")
        return {"response": sr["message"], "structured_response": sr}
