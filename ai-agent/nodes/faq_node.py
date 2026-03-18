from tools.embedding import get_embedding
from tools.vector_db import search_vector

def faq_node(state):

    query = state["user_message"]

    embedding = get_embedding(query)

    result = search_vector("faq_vectors", embedding)

    if not result:
        return {"response": "No FAQ found"}

    answer = result[2]

    return {"response": answer}