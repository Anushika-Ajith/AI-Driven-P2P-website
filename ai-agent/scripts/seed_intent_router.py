import sys
import os

# 🔥 ADD THIS FIRST
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from tools.embedding import get_embedding
import json
import psycopg2
from dotenv import load_dotenv

load_dotenv()

conn = psycopg2.connect(os.getenv("DATABASE_URL"))
cursor = conn.cursor()

with open("scripts/intent_data.json") as f:
    data = json.load(f)

for item in data:
    embedding = get_embedding(item["query"])

    cursor.execute("""
    INSERT INTO intent_router_vectors (
        intent_name,
        intent_description,
        sample_query,
        embedding,
        domain_topic_intent,
        tenant_id,
        company_id
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, (
        item["intent_name"],
        item.get("intent_description") or "Seeded intent",
        item["query"],
        embedding,
        item.get("domain_topic_intent") or None,
        item.get("tenant_id") or None,
        item.get("company_id") or None,
    ))

    print("Inserted:", item["query"])

conn.commit()
cursor.close()
conn.close()