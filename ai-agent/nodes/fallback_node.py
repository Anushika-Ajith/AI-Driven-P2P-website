from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def fallback_node(state):

    query = state["user_message"]
    print("[ASK][graph][fallback] Entered fallback node for query:", query)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": query}]
    )

    return {
        "response": response.choices[0].message.content
    }