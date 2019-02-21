# emberjs

In this example we will be deploy a `Hello, world!` example with [Ember.js](https://emberjs.com/).

### Getting started with Ember

Start a new Ember project using:

```
npx ember new hello-word
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our Ember application selecting the `package.json` as our entry point. We will also define a name for our project (optional).


```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build"
    }
  ],
  "name": "emberjs",
  "routes": [
    {
      "src": "^/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "^/robots.txt",
      "dest": "/robots.txt"
    },
    {
      "src": "^/(.*)",
      "dest": "/index.html"
    }
  ],
  "version": 2
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to build your application.

```json
{
    "scripts": {
        "now-build": "ember build --environment=production"
    }
}
```

We are now ready to deploy the app.

```
now
```
