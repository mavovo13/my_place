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

def getAddressBy(post_code):
  with get_connection() as conn:
    with conn.cursor() as cur:
      cur.execute("SELECT * FROM address where post_code='{}'".format(post_code))
      row = cur.fetchone()
    if row == None:
      return None
    else:
      return {"post_code": row[0], "display_name": row[1]}

def getAddressWithPointBy(post_code):
  with get_connection() as conn:
    with conn.cursor() as cur:
      q = """SELECT a.post_code, a.display_name, rp.display_name, rp.point FROM address as a
              inner join
                (SELECT * FROM my_place_point_address_relation as r
                  left join my_place_point as p
                    on r.my_place_point_id = p.id)
                as rp
              on a.post_code = rp.post_code
              where a.post_code='{}';""".format(post_code)
      cur.execute(q)
      rows = cur.fetchall()

    if rows == None or rows == []:
      return {}
    else:
      post_code = post_code
      display_name = rows[0][1]
      points = [{"name":_[2], "point":_[3]} for _ in rows]
      
      return {"post_code": post_code, "display_name": display_name, "points": points}