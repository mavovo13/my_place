from flask import Flask, escape, request, abort
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
    if post_code == None:
      retval = db.getAddresses()
      return {"addresses": retval}
    else:
      retval = db.getAddressBy(post_code)
      if retval == None:
        return abort(404, {"post_code": post_code})
      else:
        return retval
  else: # POST
    return f'posted'

@app.errorhandler(404)
def page_not_found(error):
    return "there is no content"

if __name__ == "__main__":
  app.run(host='0.0.0.0',port=5000,debug=True)