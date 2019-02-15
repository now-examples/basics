# FaunaDB

FaunaDB is a globally consistent distributed database that uses the Calvin protocol to provide ACID transactions across multiple clouds. [FaunaDB Cloud](https://fauna.com/) is the first serverless database to offer mainframe-like data integrity. From consumer mobile apps to mission-critical banking ledgers, FaunaDB Cloud allows you to start from zero and scale to worldwide.

In this example we will be deploying a simple "Hello World" example with FaunaDB.

To run, deploy using a FaunaDB client secret like this:

```bash
now -e FAUNADB_SECRET=fnADHJNX-IACAsrqnthNLSGJgT5_SL5gHabuvGpw
```

This is a read only key to an example database, but provisioning your own key is easy via https://dashboard.fauna.com/
