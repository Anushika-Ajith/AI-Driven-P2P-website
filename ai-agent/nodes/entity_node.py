from openai import OpenAI
client = OpenAI()

def extract_entities(state):

    prompt = f"""
Extract product name from:

{state["user_message"]}

Return only product name
"""

    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content":prompt}]
    )

    product = res.choices[0].message.content.strip()

    return {"product_name": product}