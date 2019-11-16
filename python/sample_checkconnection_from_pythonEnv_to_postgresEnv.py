import psycopg2
import random as rand

print("hello from docker!")

host = "db"
database = "test01"
user = "test01"
password = "test01"

def get_connection():
  return psycopg2.connect(host=host, database=database, user=user,password=password)

with get_connection() as conn:
    with conn.cursor() as cur:
        v = rand.randint(1,100)
        print("try to insert {}".format(v))
        cur.execute('INSERT INTO test (id) VALUES ({})'.format(v))
    conn.commit()

with get_connection() as conn:
  with conn.cursor() as cur:
    cur.execute('SELECT * FROM test')
    for row in cur:
      print(row)
      