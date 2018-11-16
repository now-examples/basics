const Hapi = require('hapi')

const server = new Hapi.server({
  host: 'localhost',
  port: 3000
})

const hello = () => 'Hello from hapi.js!'

server.route({
  method: 'GET',
  path: '/',
  handler: hello
})

server.start()
