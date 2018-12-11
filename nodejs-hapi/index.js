const Hapi = require('hapi')

const server = new Hapi.server({
  host: 'localhost',
  port: process.env.PORT || 3000
})

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Hello from hapi.js!'
})

server.start()
