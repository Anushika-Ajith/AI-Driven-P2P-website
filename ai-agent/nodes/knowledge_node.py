from tools.embedding import get_embedding
from tools.vector_db import search_vector
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def knowledge_node(state):

    query = state["user_message"]
    print("[ASK][pipeline][graph:knowledge] STEP — enter knowledge_node")
    print("[ASK][pipeline][graph:knowledge] STEP — query:", query)

    embedding = get_embedding(query)
    print("[ASK][pipeline][graph:knowledge] STEP — search knowledge_vectors (embedding)")

    docs = search_vector("knowledge_vectors", embedding)

    if not docs:
        print("[ASK][pipeline][graph:knowledge] STEP — no knowledge row → placeholder")
        return {"response": "No knowledge found"}

    context = docs[2]
    print("[ASK][pipeline][graph:knowledge] STEP — context retrieved, calling LLM to answer")

    prompt = f"""
Answer based on context:

{context}

Question: {query}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    text = response.choices[0].message.content
    print("[ASK][pipeline][graph:knowledge] STEP — LLM answer length:", len(str(text or "")))
    print("[ASK][pipeline][graph:knowledge] STEP — exit knowledge_node (terminal)")
    return {"response": text}