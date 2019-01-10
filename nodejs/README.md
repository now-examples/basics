# Node.js

In this example we will be deploying a simple "Hello World" example with Node.js.

### Getting started with Node.js

- We can prepare our API    design by creating the folder `api` and then `users` inside it.
This will ensure that the route `/api/users` matches how our files are disposed.

- Let's write how we would like to reply when a `GET` request is sent. For that, create
a `get.js` file inside `api/users/` with the following code:

```js
module.exports = (req, res) => {
  res.end(`Hello from Node.js on Now 2.0!`);
};
```

- To add functionality, we can write `post.js`, which will handle `POST` requests:

```js
module.exports = (req, res) => {
  let body = '';
  req.on('data', piece => {
    body = body + piece.toString();
  });
  req.on('end', () => {
    res.end(body);
  });
};

```

- Finally we can create a `index.js`. This javascript code will route the request trough the appropriate handler:

```js
const get = require('./get')
const post = require('./post')

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return get(req, res)
  } else if (req.method === 'POST') {
    return post(req, res)
  } else {
    res.writeHead(400)
    res.end('Method not supported')
  }
}

```

Notice how we require `./get.js` and `./post` and how we pass the request and response objects for them to handle.

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/node` to build and deploy the all JavaScript files. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "nodejs",
  "builds": [
    { "src": "api/users/index.js", "use": "@now/node" }
  ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```
