# Fastify

> Fast and low overhead web framework, for Node.js 

This example uses [`@now/node-server`](https://zeit.co/docs/v2/deployments/official-builders/node-js-server-now-node-server/) to run a fastify instance with **now**. Fastify is very fast and should not be used as a true _microservice_ server solution. The routing library under-the-hood is significantly faster than many common microservice solutions; for this reason, it is best to send all routes to a single main server instance. The exception to this is if you are attempting to host multiple distinct APIs from a single domain; in this case, a multi instance solution would suffice.

## now.json

```json
{
  "version": 2,
  "name": "now-fastify",
  "builds": [
    { "src": "index.js", "use": "@now/node-server" }
  ]
}
```

## index.js

```js
const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.listen()
```