from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def extract_entities(state):
    print("[ASK][graph][entity] Entered entity node. message:", state.get("user_message"))

    prompt = f"""
Extract product name from:

{state["user_message"]}

Return only product name
"""

    try:
        res = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )
        product = (res.choices[0].message.content or "").strip()
        print("[ASK][graph][entity] Extracted product_name:", product)
        return {"product_name": product}
    except Exception as e:
        # Keep graph execution alive even if entity extraction LLM is unavailable.
        print("[ASK][graph][entity] Entity extraction failed. Continuing without product_name.", e)
        return {"product_name": ""}