from tools.embedding import get_embedding
from tools.vector_db import search_vector
import requests

def action_node(state):

    query = state["user_message"]

    embedding = get_embedding(query)

    results = search_vector("api_action_vectors", embedding)

    if not results:
        return {"response": "No API found"}

    api = results[0]   # ✅ FIX

    endpoint = api[5]
    method = api[6]

    print("Calling API:", endpoint)

    if not endpoint or not method:
        return {"response": "API configuration missing"}

    try:
        if method == "GET":
            res = requests.get(endpoint)
        else:
            res = requests.post(endpoint)

        return {"response": res.text}

    except Exception as e:
        print("API Error:", e)
        return {"response": "API call failed"}