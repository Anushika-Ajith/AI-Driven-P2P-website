from tools.embedding import get_embedding
from tools.vector_db import search_vector

def faq_node(state):

    query = state["user_message"]
    print("[ASK][pipeline][graph:faq] STEP — enter faq_node")
    print("[ASK][pipeline][graph:faq] STEP — query:", query)

    embedding = get_embedding(query)
    print("[ASK][pipeline][graph:faq] STEP — search faq_vectors (embedding)")

    result = search_vector("faq_vectors", embedding)

    if not result:
        print("[ASK][pipeline][graph:faq] STEP — no FAQ row → response placeholder")
        return {"response": "No FAQ found"}

    answer = result[2]
    print("[ASK][pipeline][graph:faq] STEP — FAQ hit, answer length:", len(str(answer)))
    print("[ASK][pipeline][graph:faq] STEP — exit faq_node (terminal)")
    return {
        "response":
        answer +
        "\n\nWas this helpful? Reply YES or NO."
    }