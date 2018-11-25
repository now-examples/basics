const Starter = require('./lib/starter.js')
const processUsers = require('./v1/users/process')
const processBooks = require('./v1/books/process')

Starter.app.get("/v1/books", processBooks);
Starter.app.get("/v1/users", processUsers);


Starter.app.listen(Starter.port, function() {
    console.log(`> Ready on : ${Starter.port}`)
})
