import sys
import os
import json
import psycopg2

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from tools.embedding import get_embedding
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

json_path = os.path.join(BASE_DIR, "scripts", "intent_data.json")

conn = psycopg2.connect(os.getenv("DATABASE_URL"))
cursor = conn.cursor()

with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:

    embedding = get_embedding(item["query"])

    cursor.execute("""
    INSERT INTO intent_router_vectors (
        intent_name,
        sample_query,
        embedding,
        domain_topic_intent
    )
    VALUES (%s, %s, %s, %s)
    """, (
        item["intent_name"],
        item["query"],
        embedding,

        json.dumps(item.get("domain_topic_intent"))
        if item.get("domain_topic_intent")
        else None,
    ))

    print("Inserted:", item["query"])

conn.commit()

cursor.close()
conn.close()

print("✅ Intent router seeded successfully")