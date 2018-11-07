# node-micro-sse

In this project we will be building and deploying a Server Sent Events (SSE) example using [Micro](https://github.com/zeit/micro).

Micro is an asynchronous http server that is aimed to be lightweight, fast and easy.

### Getting started with Micro

#### Create a new folder with the name of your app

```
mkdir my-app && cd my-app
```

#### Create a src folder

```
mkdir src
```

#### Create a index.js file in src

```
touch src/index.js
```

For this example we will use the minimal requirements to run Server Sent Events.

```
const SSE = require("sse-channel");
const sse = new SSE();
const html = require("fs").readFileSync(__dirname + "/index.html", "utf8");

setInterval(() => {
  sse.send(new Date().toISOString());
}, 1000);

module.exports = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Length": Buffer.byteLength(html)
    });
    res.end(html);
  } else if (req.url === "/channel") {
    sse.addClient(req, res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
};
```

#### Create a index.html file in src

```
touch src/index.html
```

We need a simple webpage to show server sent events.

```
<!doctype html>
<h1>SSE Demo</h1>

<pre>Connecting…</pre>

<script>
  var ev = new EventSource("/channel");
  var pre = document.querySelector('pre');
  ev.onmessage = function (e) {
    pre.innerHTML = pre.innerHTML += "\n" + e.data;
    if (pre.innerHTML.length > 10000) {
      pre.innerHTML = "[trimmed]\n";
    }
  }
</script>
```

### Adding Dockerfile for Node

#### Instructions

We will create a `Dockerfile` with multi stage builds to:

- Install all the dependencies
- Create a new lighter Docker image to reduce boot time
- Pull built files and production dependencies from previous steps

#### Dockerfile

We will start by using the official Node Alpine 10 image to install the dependencies and build the project, after that we will use a slighter image to have the minimum requirements and lower the Docker image size to run the app and copy all the files.

Then using the Docker `CMD` we will start the app in production mode.

```
FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn --production
COPY . .

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
CMD ["node", "./node_modules/.bin/micro"]
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
