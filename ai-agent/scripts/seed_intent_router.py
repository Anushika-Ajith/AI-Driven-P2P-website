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
        sample_query,
        embedding
    )
    VALUES (%s, %s, %s)
    """, (
        item["intent_name"],
        item["query"],
        embedding
    ))

    print("Inserted:", item["query"])

conn.commit()
cursor.close()
conn.close()