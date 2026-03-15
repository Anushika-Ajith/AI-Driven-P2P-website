from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def detect_intent(state):

    prompt = f"""
Classify the user intent.

Only return ONE of these exact values:

get_forecast
get_requirements
check_stock
get_pending_approvals
create_pr
procurement_knowledge

User message:
{state["user_message"]}
"""

    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )

    intent = res.choices[0].message.content.strip()

    print("Detected intent:", intent)

    return {"intent": intent}