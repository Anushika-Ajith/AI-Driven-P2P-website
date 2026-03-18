from tools.embedding import get_embedding
from tools.vector_db import search_vector
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def knowledge_node(state):

    query = state["user_message"]

    embedding = get_embedding(query)

    docs = search_vector("knowledge_vectors", embedding)

    if not docs:
        return {"response": "No knowledge found"}

    context = docs[2]

    prompt = f"""
Answer based on context:

{context}

Question: {query}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return {"response": response.choices[0].message.content}