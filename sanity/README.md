# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

### Configuring studio

Configure a Sanity project for the studio:
```
npx sanity init
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our Sanity studio selecting the `package.json` as our entry point. We will also define a name for our project (optional).

```json
{
  "version": 2,
  "name": "sanity",
  "builds": [
    { "src": "package.json", "use": "@now/static-build" }
  ],
  "routes": [
    {"src": "^/static/(.*)", "dest": "/static/$1"},
    {"src": "^/favicon.ico", "dest": "/favicon.ico"},
    {"src": "^/(.*)", "dest": "/index.html"}
  ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application.

```json
{
  "scripts": {
    ...
    "now-build": "sanity build"
  }
}
```

We are now ready to deploy the app.

```
now
```

### Cross Origin Resource Sharing (CORS)

Remember to add the origin of your deployment to the list of allowed origins in Sanity. `sanity cors add <origin>` or go to the Sanity [management dashboard](https://manage.sanity.io/).

### Sanity: Next steps

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)


