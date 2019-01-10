const get = require('./get')
const post = require('./post')

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return get(req, res)
  } else if (req.method === 'POST') {
    return post(req, res)
  } else {
    res.writeHead(400)
    res.end('Method not supported')
  }
}
