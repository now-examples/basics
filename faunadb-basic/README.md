# FaunaDB

In this example we will be deploying a simple "Hello World" example with FaunaDB.

### What is FaunaDB?

[FaunaDB](https://fauna.com/) is a distributed operational (OLTP) database for modern cloud and container-centric environments. It is the world’s first commercial database that is inspired by [Calvin](http://cs.yale.edu/homes/thomson/publications/calvin-sigmod12.pdf), a strictly serializable transaction protocol for multi-region environments. FaunaDB was built to address technology requirements from modern digital businesses and is influenced by the database research community. With a design focus on quick deployment, simplicity of daily operations, and developer’s ease of use, FaunaDB is a truly unique database for deploying modern applications.

Highlights include:

* Masterless, multi-cloud, multi-region, active-active clustering architecture.
* From snapshots to strictly-serializable transactions, FaunaDB’s [multiple consistency levels](https://docs.fauna.com/fauna/current/reference/isolation_levels.html) don’t break with clock skew.
* Multiple models to manipulate your data (relational, document, graph).
* A DSL-like, composable [query language](https://docs.fauna.com/fauna/current/reference/queryapi/index.html) that allows for better and faster development.
* Key-based security, on by default, that prevents inadvertent data leaks
* New capabilities such as temporality, multi-tenancy, and dynamic QoS


> For further information on FaunaDB, see [What is FaunaDB?](https://docs.fauna.com/fauna/current/introduction.html).


### Getting started with FaunaDB

First, let's start by installing [FaunaDB's JavaScript Driver](https://github.com/fauna/faunadb-js) as a dependency in the project folder you are working in:

```shell
yarn add faunadb
```

Next, let's create a file named `index.js` with all the necessary code for running a FaunaDB query:

```js
// Require FaunaDB Driver
const faunadb = require('faunadb');

// The faunadb.query module contains all of the
// functions to create FaunaDB query expressions.
const q = faunadb.query;

// Initiate the FaunaDB client with a valid secret key.
// The FaunaDB client will be used for issuing the queries.
const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY_SECRET });

module.exports = (req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});

  client
      // Issue a query for prompting a FaunaDB object.
      // The driver will send the query to the FaunaDB
      // Cloud server and return its response.
      .query({salutation: q.Concat(["Hello ", "world."])})
      .then((data) => {
        // Include the query's result in the HTTP Response
        res.end('<p>This is a Node.js lambda function running on Now 2.0.</p><hr><p>This is a FaunaDB query result:</p><pre>' + JSON.stringify(data) + '</pre>');
      })
      .catch((err) => {
        // Log the response in case of error
        console.error(err);
        res.end('<p>Error:</p><pre>' + JSON.stringify(err) + '</pre>');
      });
}
```

#### Obtaining a FaunaDB key secret

In order to run the code above, you will need to provide a valid FaunaDB key secret. To do so, first create a free Fauna Cloud account by [signing up](https://dashboard.fauna.com/accounts/register). After submitting the form, you will be redirected to the [FaunaDB Cloud Dashboard](https://dashboard.fauna.com). There, follow the steps for creating a new Database. Once the Database is created, issue a new Server Key for it. The key secret will be displayed as result– make sure to copy and save it somewhere safe, since the secret won't be displayed again.

### Deploy with Now

In order to deploy the code, we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now). By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs). In this case we are going to use `@now/node` to build and deploy all of JavaScript files. 

Additionaly, we need to provide an [Environment Variable](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets) for provisioning FaunaDB's key secret to initiate the FaunaDB Client. At the same time, the Environment Variable will be provided as a [Secret](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/#securing-environment-variables-using-secrets) value.

The complete `now.json` file should look like the following:

```json
{
  "version": 2,
  "name": "faunadb",
  "env": {
    "FAUNADB_KEY_SECRET": "@faunadb-key-secret"
  },
  "builds": [{ "src": "*.js", "use": "@now/node" }]
}
```

Next, issue following command for provisioning the value for the `@faunadb-key-secret` secret. Make sure to include the FaunaDB's key secret obtained in previous steps.

```shell
now secret add faunadb-key-secret your-faunadb-key-secret
```

Last, execute below command for deploying the app:

```shell
now
```
