from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def extract_entities(state):
    print("[ASK][pipeline][graph:entity] STEP — enter entity node")
    print("[ASK][pipeline][graph:entity] STEP — user_message:", state.get("user_message"))

    prompt = f"""
Extract product name from:

{state["user_message"]}

Return only product name
"""

    try:
        print("[ASK][pipeline][graph:entity] STEP — calling LLM for product_name extraction")
        res = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )
        product = (res.choices[0].message.content or "").strip()
        print("[ASK][pipeline][graph:entity] STEP — extracted product_name:", product)
        print("[ASK][pipeline][graph:entity] STEP — exit entity → edge to intent_router")
        return {"product_name": product}
    except Exception as e:
        # Keep graph execution alive even if entity extraction LLM is unavailable.
        print("[ASK][pipeline][graph:entity] STEP — entity extraction failed:", e)
        print("[ASK][pipeline][graph:entity] STEP — exit entity (empty product_name) → intent_router")
        return {"product_name": ""}