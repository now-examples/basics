# Static UmiJS

In this example we will be deploying a simple "Hello World" example with umi.

### Getting started with umi using create-umi

- First, use `yarn create umi` in the new directory.

```shell
$ mkdir myapp && cd myapp
$ yarn create umi
```

- Complete the create-umi wizard according to your needs. In this example we used the following options:

```shell
? Select the boilerplate type **app**
? Do you want to use typescript? **No**
? What functionality do you want to enable? **code splitting**
```

### Deploy a Static version to Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our umi application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "umijs-static",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build"
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/static/$1"
    },
    {
      "src": "/(.*).js",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/$1.js"
    },
    {
      "src": "/(.*).css",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/$1.css"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html",
      "headers": { "cache-control": "s-maxage=0" }
    }
  ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application. Notice that `umi build` generates files to the `dist` folder which Now identifies as the static folder.

```json
{
  "scripts": {
    ...
    "now-build": "umi build"
  }
}
```

We are now ready to deploy the app.

```shell
$ now
```
