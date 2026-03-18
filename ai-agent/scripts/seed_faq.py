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

question = "What is GRN?"
answer = "GRN stands for Goods Receipt Note used to confirm goods received."

embedding = get_embedding(question)

cursor.execute("""
INSERT INTO faq_vectors (
    question,
    answer,
    embedding
)
VALUES (%s, %s, %s)
""", (question, answer, embedding))

conn.commit()
cursor.close()
conn.close()

print("✅ FAQ inserted")