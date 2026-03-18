from tools.embedding import get_embedding
from tools.vector_db import search_vector

def rag_router_node(state):

    query = state["user_message"]

    embedding = get_embedding(query)

    result = search_vector("intent_router_vectors", embedding)

    if not result:
        return {**state, "rag_type": "fallback"}

    distance = result[-1]  # last column

    print("Distance:", distance)

    # 🔥 THRESHOLD (IMPORTANT)
    if distance > 0.4:
        print("⚠️ Low similarity → fallback")
        return {**state, "rag_type": "fallback"}

    rag_type = result[1]

    return {
        **state,
        "rag_type": rag_type
    }