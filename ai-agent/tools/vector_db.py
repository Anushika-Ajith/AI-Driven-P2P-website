import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")


def get_connection():
    return psycopg2.connect(DATABASE_URL)


def search_vector(table, embedding):

    conn = get_connection()
    cursor = conn.cursor()

    embedding_str = str(embedding)

    query = f"""
    SELECT *, (embedding <-> %s::vector) AS distance
    FROM {table}
    ORDER BY embedding <-> %s::vector
    LIMIT 1;
    """

    cursor.execute(query, (embedding_str, embedding_str))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    return result