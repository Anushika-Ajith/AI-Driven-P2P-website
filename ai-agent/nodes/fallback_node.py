from openai import OpenAI
import os
from services.feedback_service import (
    save_learning_feedback
)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def fallback_node(state):

    query = state["user_message"]
    print("[ASK][pipeline][graph:fallback] STEP — enter fallback_node")
    print("[ASK][pipeline][graph:fallback] STEP — query:", query)

    print("[ASK][pipeline][graph:fallback] STEP — calling LLM (raw user message as prompt)")
    save_learning_feedback(
        user_id=state.get("user_id"),
        question=query,
        answer="",
        intent="fallback",
        source="unknown_question"
    )
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": query}]
    )
    text = response.choices[0].message.content
    print("[ASK][pipeline][graph:fallback] STEP — response length:", len(str(text or "")))
    print("[ASK][pipeline][graph:fallback] STEP — exit fallback_node (terminal)")

    return {
        "response": text
    }