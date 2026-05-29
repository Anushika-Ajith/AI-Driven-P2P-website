import psycopg2
import os

DATABASE_URL = os.getenv("DATABASE_URL")

def save_learning_feedback(
    user_id,
    question,
    detected_intent,
    answer
):

    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()

    cur.execute("""
    INSERT INTO learning_feedback(
        user_id,
        question,
        detected_intent,
        answer
    )
    VALUES(%s,%s,%s,%s)
    """,(
        user_id,
        question,
        detected_intent,
        answer
    ))

    conn.commit()

    cur.close()
    conn.close()