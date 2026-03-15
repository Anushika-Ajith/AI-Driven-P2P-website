from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def detect_topic(state):

    prompt = f"""
Classify topic:

forecast
inventory
approvals
sourcing
knowledge

User message:
{state["user_message"]}
"""

    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content":prompt}]
    )

    topic = res.choices[0].message.content.strip()

    return {"topic": topic}