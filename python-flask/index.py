from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return Response("<link rel='stylesheet' href='/css/style.css' /><h1>Flask on Now 2.0</h1><p>You are viewing a Flask application written in Python running on Now 2.0.</p><p>Visit the <a href='./about'>about</a> page</p>", mimetype='text/html')
