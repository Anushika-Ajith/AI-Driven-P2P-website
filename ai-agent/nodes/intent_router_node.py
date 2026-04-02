from tools.embedding import get_embedding
from tools.vector_db import search_vector_rows


# Distances observed in this project are typically close to 1.0.
# A strict 0.4 gate sends valid action/knowledge queries to fallback.
INTENT_DISTANCE_THRESHOLD = 0.95

def intent_router_node(state):

    query = (state.get("user_message") or "").strip()
    print("[ASK][pipeline][graph:intent_router] STEP — enter intent_router")
    print("[ASK][pipeline][graph:intent_router] STEP — query:", query)

    embedding = get_embedding(query)
    print("[ASK][pipeline][graph:intent_router] STEP — embedding dims:", len(embedding))

    # Table schema (as provided):
    # intent_vector_id, intent_name, intent_description, sample_query, embedding,
    # domain_topic_intent, tenant_id, company_id, created_at (+ computed distance)
    rows = search_vector_rows("intent_router_vectors", embedding, limit=1)
    if not rows:
        print("[ASK][pipeline][graph:intent_router] STEP — no intent rows in DB → intent=fallback")
        return {**state, "intent": "fallback", "intent_distance": 1.0}

    row = rows[0]
    intent = row.get("intent_name") or "fallback"
    distance = row.get("distance")
    try:
        distance_val = float(distance) if distance is not None else 1.0
    except Exception:
        distance_val = 1.0
    print("[ASK][pipeline][graph:intent_router] STEP — top intent row sample_query:", row.get("sample_query"))
    print("[ASK][pipeline][graph:intent_router] STEP — candidate intent_name:", intent, "distance:", distance_val)

    # Similarity threshold guardrail (mirrors earlier rag_router logic):
    # If distance is high, treat as unknown → fallback.
    if distance_val > INTENT_DISTANCE_THRESHOLD:
        intent = "fallback"
        print("[ASK][pipeline][graph:intent_router] STEP — distance > threshold %.2f → forcing fallback" % INTENT_DISTANCE_THRESHOLD)
    else:
        print("[ASK][pipeline][graph:intent_router] STEP — intent accepted under threshold")

    print("[ASK][pipeline][graph:intent_router] STEP — exit intent_router → conditional_edge(decide)")
    return {
        **state,
        "intent": intent,
        "intent_distance": distance_val,
    }