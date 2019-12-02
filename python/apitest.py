from flask import Flask, escape, request
import db_controller as db

app = Flask(__name__)

@app.route('/')
def hello():
  name = request.args.get("name", "World")
  return f'Hello, {escape(name)}!'

@app.route('/address')  
@app.route('/address/<post_code>', methods=['GET', 'POST'])
def address(post_code=None):
  if request.method == 'GET':
    retval = db.getAddresses()
    return {"addresses": retval}
  else: # POST
    return f'posted'



if __name__ == "__main__":
  app.run(host='0.0.0.0',port=5000,debug=True)