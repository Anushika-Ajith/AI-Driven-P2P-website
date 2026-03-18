from tools.embedding import get_embedding
from tools.vector_db import search_vector

def intent_router_node(state):

    query = state["user_message"]

    embedding = get_embedding(query)

    results = search_vector("intent_router_vectors", embedding)

    intent = results[0][1]  # intent_name

    return {
        **state,
        "intent": intent
    }