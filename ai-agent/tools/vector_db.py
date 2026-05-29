# import psycopg2
# import os
# from dotenv import load_dotenv

# load_dotenv()

# DATABASE_URL = os.getenv("DATABASE_URL")


# def get_connection():
#     return psycopg2.connect(DATABASE_URL)


# def search_vector(table, embedding):

#     conn = get_connection()
#     cursor = conn.cursor()

#     embedding_str = str(embedding)

#     query = f"""
#     SELECT *, (embedding <-> %s::vector) AS distance
#     FROM {table}
#     ORDER BY embedding <-> %s::vector
#     LIMIT 1;
#     """

#     cursor.execute(query, (embedding_str, embedding_str))
#     result = cursor.fetchone()

#     cursor.close()
#     conn.close()

#     return result


# def search_vector_rows(table: str, embedding, limit: int = 1):
#     """
#     Vector search returning rows as dicts keyed by column name.
#     Adds a computed `distance` column.
#     """
#     conn = get_connection()
#     cursor = conn.cursor()

#     embedding_str = str(embedding)

#     query = f"""
#     SELECT *, (embedding <-> %s::vector) AS distance
#     FROM {table}
#     ORDER BY embedding <-> %s::vector
#     LIMIT {int(limit)};
#     """

#     cursor.execute(query, (embedding_str, embedding_str))
#     rows = cursor.fetchall()
#     colnames = [d[0] for d in cursor.description] if cursor.description else []

#     cursor.close()
#     conn.close()

#     results = []
#     for row in rows:
#         results.append({colnames[i]: row[i] for i in range(min(len(colnames), len(row)))})
#     return results

import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

conn = psycopg2.connect(DATABASE_URL)
conn.autocommit = True


def search_vector_rows(table_name, embedding, limit=1):

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    embedding_dimension = len(embedding)

    # 🔥 CHECK VECTOR DIMENSION FROM DB
    cursor.execute(f"""
        SELECT atttypmod
        FROM pg_attribute
        WHERE attrelid = '{table_name}'::regclass
        AND attname = 'embedding';
    """)

    result = cursor.fetchone()

    if result:

        db_dimension = int(result["atttypmod"])

        print(f"[VECTOR] DB dimension: {db_dimension}")
        print(f"[VECTOR] EMBEDDING dimension: {embedding_dimension}")

        if db_dimension != embedding_dimension:

            raise Exception(
                f"""
VECTOR DIMENSION MISMATCH

DB VECTOR DIMENSION      : {db_dimension}
EMBEDDING VECTOR DIMENSION: {embedding_dimension}

Fix your PostgreSQL vector column.
"""
            )

    # 🔥 CONVERT VECTOR FORMAT
    embedding_str = "[" + ",".join(map(str, embedding)) + "]"

    query = f"""
        SELECT *,
               embedding <=> %s::vector AS distance
        FROM {table_name}
        ORDER BY distance
        LIMIT %s;
    """

    cursor.execute(query, (embedding_str, limit))

    rows = cursor.fetchall()

    cursor.close()

    return rows


def search_vector(table_name, embedding):

    rows = search_vector_rows(table_name, embedding, limit=1)

    if not rows:
        return None

    row = rows[0]

    return list(row.values())