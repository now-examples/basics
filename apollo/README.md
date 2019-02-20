# Apollo Server

In this example, we will be deploying an Apollo GraphQL Server API with ZEIT Now.

### Deploying Apollo Server with Now

Create a [`now.json` configuration file](https://zeit.co/docs/v2/deployments/configuration) in the project directory and add the following content.

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@now/node-server" }],
  "routes": [{ "src": "/.*", "dest": "index.js" }]
}
```

- The `version` property specifies [`Now 2.0`](https://zeit.co/now).
- The [`routes` property](/docs/v2/deployments/configuration#routes) allows Now to route your deployment either by using a source and destination, or by way of a source, status, and headers.
- The [`builds` property](https://zeit.co/docs/v2/deployments/builds) allows Now to use a [builder](https://zeit.co/docs/v2/deployments/builders/overview/) with a specific source target.

We used the `@now/node-server` [builder](https://zeit.co/docs/v2/deployments/builders/overview) to enable a Node.js server deployment.

Next, deploy the app with the Now CLI.

```shell
$ now
```

Find out more information on deploying Apollo Server with Now, please refer to the [Deploying Apollo Server to Now](https://zeit.co/guides/deploying-apolloserver-to-now/) guide.