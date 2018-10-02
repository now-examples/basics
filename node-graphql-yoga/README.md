# GraphQL Server with Yoga

This is a boilerplate for a GraphQL server built with [Yoga](https://github.com/prisma/graphql-yoga). It includes [prisma-bindings](https://github.com/prisma/prisma), using a [hosted service](https://app.prisma.io) as a database and Prisma server.

## How to use

As we are using Prisma, we have a two stage setup. First the database, second the actual GraphQL server.

You need to install all dependancies:

```sh
yarn
```

Then run `npx prisma deploy` (you can follow the guide [here](https://www.prisma.io/docs/quickstart/) for more details). This will deploy the service specified under the `database` folder.
After deploying to the demo server, it will add an endpoint to `database/datamodel.graphql`.

You then need to add a couple of secrets to Now - `APP_SECRET` and `PRISMA_SECRET`. The former is used for the JWT authentication, and the latter is used to authenticate between the hosted Prisma service, and the GraphQL server.

Once you have finished that, yo can go ahead and deploy with `now`.

## Documentation from Yoga

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>|
| :--  | :--         |
| `├── .env` | Defines environment variables |
| `├── .graphqlconfig.yml` | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).|
| `└── database ` (_directory_) | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── datamodel.graphql` | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src ` (_directory_) | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** defining the API exposed to client applications  |
| `　　├── resolvers` (_directory_) | _Contains the implementation of the resolvers for the application schema_ |
| `　　└── generated` (_directory_) | _Contains generated files_ |
| `　　　　└── prisma.grapghql` | The **Prisma database schema** defining the Prisma GraphQL API  |
