import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="odin_ai",
    user="postgres",
    password="anjana123"
)

cursor = conn.cursor()