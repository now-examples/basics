const Starter = require('../../lib/starter')
const process = require('./process.js')

Starter.app.get('*', process)

Starter.app.listen(Starter.port, function() {
    console.log(`> Ready`)
})
