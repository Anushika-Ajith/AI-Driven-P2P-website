import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")


def get_connection():
    return psycopg2.connect(DATABASE_URL)


def save_learning_feedback(
    user_id,
    question,
    answer,
    intent,
    source
):

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO learning_feedback(
            user_id,
            question,
            answer,
            intent,
            source
        )
        VALUES(%s,%s,%s,%s,%s)
    """, (
        user_id,
        question,
        answer,
        intent,
        source
    ))

    conn.commit()

    cur.close()
    conn.close()


def save_user_feedback(
    user_id,
    question,
    answer,
    feedback
):

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO conversation_feedback(
            user_id,
            question,
            answer,
            feedback_status
        )
        VALUES(%s,%s,%s,%s)
    """, (
        user_id,
        question,
        answer,
        feedback
    ))

    conn.commit()

    cur.close()
    conn.close()