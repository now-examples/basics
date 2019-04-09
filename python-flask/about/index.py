from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    name = path.upper()
    v = __version__
    return Response("<link rel='stylesheet' href='/css/style.css' /><h1>%s</h1><ul><li>WSGI Enabled</li><li>Flask version <em>%s</em></li><ul><p>Visit the <a href='./'>home</a> page</p> or <a href='https://github.com/zeit/now-examples/tree/master/python-flask'>see the source code</a>." % (name, v), mimetype='text/html')
