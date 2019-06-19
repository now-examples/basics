const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return 'Yes, Fastify is awesome!'
})

fastify.listen()