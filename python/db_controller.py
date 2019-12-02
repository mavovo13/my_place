import psycopg2

host = "db"
database = "test01"
user = "test01"
password = "test01"

def get_connection():
  return psycopg2.connect(host=host, database=database, user=user,password=password)

def getAddresses():
  with get_connection() as conn:
    with conn.cursor() as cur:
      cur.execute('SELECT * FROM address')
      rows = cur.fetchall()
  return [{"post_code":_[0], "display_name":_[1]} for _ in rows]
