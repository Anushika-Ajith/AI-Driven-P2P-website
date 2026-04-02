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


def search_vector_rows(table: str, embedding, limit: int = 1):
    """
    Vector search returning rows as dicts keyed by column name.
    Adds a computed `distance` column.
    """
    conn = get_connection()
    cursor = conn.cursor()

    embedding_str = str(embedding)

    query = f"""
    SELECT *, (embedding <-> %s::vector) AS distance
    FROM {table}
    ORDER BY embedding <-> %s::vector
    LIMIT {int(limit)};
    """

    cursor.execute(query, (embedding_str, embedding_str))
    rows = cursor.fetchall()
    colnames = [d[0] for d in cursor.description] if cursor.description else []

    cursor.close()
    conn.close()

    results = []
    for row in rows:
        results.append({colnames[i]: row[i] for i in range(min(len(colnames), len(row)))})
    return results