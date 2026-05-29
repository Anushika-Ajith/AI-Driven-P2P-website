import uuid
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")


def get_conn():
    return psycopg2.connect(DATABASE_URL)


def save_pending_action(
    user_id,
    action_name,
    original_query,
    missing_param
):
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
    INSERT INTO pending_actions(
        id,
        user_id,
        action_name,
        original_query,
        missing_param,
        completed
    )
    VALUES(%s,%s,%s,%s,%s,false)
    """,(
        str(uuid.uuid4()),
        user_id,
        action_name,
        original_query,
        missing_param
    ))

    conn.commit()
    cur.close()
    conn.close()


def get_pending_action(user_id):

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
    SELECT
        id,
        action_name,
        original_query,
        missing_param
    FROM pending_actions
    WHERE user_id=%s
    AND completed=false
    ORDER BY created_at DESC
    LIMIT 1
    """,(user_id,))

    row = cur.fetchone()

    cur.close()
    conn.close()

    if not row:
        return None

    return {
        "id": row[0],
        "action_name": row[1],
        "original_query": row[2],
        "missing_param": row[3]
    }


def complete_pending_action(action_id):

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
    UPDATE pending_actions
    SET completed=true
    WHERE id=%s
    """,(action_id,))

    conn.commit()

    cur.close()
    conn.close()