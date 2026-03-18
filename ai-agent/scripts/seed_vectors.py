import sys
import os


sys.path.append(os.path.dirname(os.path.dirname(__file__)))

import uuid
import psycopg2
from tools.embedding import get_embedding
from dotenv import load_dotenv
import os

load_dotenv()

conn = psycopg2.connect(os.getenv("DATABASE_URL"))
cursor = conn.cursor()

TENANT_ID = str(uuid.uuid4())
COMPANY_ID = str(uuid.uuid4())

def insert_api(action_id, query, endpoint, method):

    embedding = get_embedding(query)

    cursor.execute("""
    INSERT INTO api_action_vectors (
        action_id,
        sample_query,
        action_description,
        api_name,
        api_endpoint,
        http_method,
        execution_type,
        request_schema,
        embedding,
        domain_topic_intent,
        tenant_id,
        company_id
    )
    VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """, (
        action_id,
        query,
        "Auto generated",
        action_id + "_api",
        endpoint,
        method,
        "api",
        "{}",
        embedding,
        '{"domain":"procurement","intent":"action"}',
        TENANT_ID,
        COMPANY_ID
    ))

# 🔥 INSERT CORRECTLY
insert_api("show_approvals", "show my approvals", "http://localhost:8000/approvals", "GET")
insert_api("create_rfq", "create rfq", "http://localhost:8000/rfq/create", "POST")
insert_api("approve_po", "approve purchase order", "http://localhost:8000/po/approve", "POST")

conn.commit()
cursor.close()
conn.close()

print("✅ CLEAN DATA INSERTED")

#added in db   
# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS action_description TEXT;

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS api_name VARCHAR(150);

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS api_endpoint TEXT;

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS http_method VARCHAR(10);

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS execution_type VARCHAR(50);

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS request_schema JSONB;

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS domain_topic_intent JSONB;

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS tenant_id UUID;

# ALTER TABLE api_action_vectors
# ADD COLUMN IF NOT EXISTS company_id UUID;