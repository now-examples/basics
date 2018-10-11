# python-hello-world

In this project, we will be building and deploying a Hello World example using [Python](https://www.python.org/).

Python is an open source programming language that makes it easy to build simple, reliable, and efficient software.

### Getting started with Python

#### Create a new folder with the name of your app

```
mkdir my-app && cd my-app
```

#### Create a main.py file

```
touch main.py
```

For this example, we will use the minimal requirements to run a Hello World.

```
from http.server import BaseHTTPRequestHandler,HTTPServer

class myHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		self.send_response(200)
		self.end_headers()
		self.wfile.write(b'Hello Python!')

server = HTTPServer(('', 3000), myHandler)
server.serve_forever()
```

### Adding Dockerfile for Python

#### Instructions

We will create a `Dockerfile` with multi stage builds to:

- Install all the dependencies
- Build the application for production
- Copy files and run the application

#### Dockerfile

We will start by using the prebuild official Python Docker image to install the dependencies and build the project after that we will copy all the files on the image.

Then using the Docker `CMD` we will start the app in production mode.

```
FROM python:3-alpine
WORKDIR /usr/src
COPY . .
CMD ["python", "main.py"]
```

#### Add a .dockerignore

We can tell to Docker which files should only be required for building the project using a `.dockerignore` file.

```
touch .dockerignore
```

For this project we only need the main.py.

```
*
!main.py
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Cloud V2.

```
touch now.json
```

By just adding the features key, we can specify the Now cloud to use.

```
{
  "features": {
    "cloud": "v2"
  }
}
```

We are now ready to deploy the app.

```
now
```
