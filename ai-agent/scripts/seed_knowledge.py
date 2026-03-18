import sys
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
sys.path.append(BASE_DIR)

from tools.embedding import get_embedding
import psycopg2
from dotenv import load_dotenv

load_dotenv()

conn = psycopg2.connect(os.getenv("DATABASE_URL"))
cursor = conn.cursor()

text = """
RFQ (Request for Quotation) workflow includes:
1. Requirement identification
2. Vendor selection
3. Sending RFQ
4. Receiving quotations
5. Evaluation
6. Approval and purchase order creation
"""

embedding = get_embedding(text)

cursor.execute("""
INSERT INTO knowledge_vectors (
    content_chunk,
    embedding
)
VALUES (%s, %s)
""", (text, embedding))

conn.commit()
cursor.close()
conn.close()

print("✅ Knowledge inserted")