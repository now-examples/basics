const http = require('http');
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

const server = http.createServer((req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});
  client.query({salutation : q.Concat(["Hello ", "world."])})
    .then((data) => {
      res.end('This is a Node.js server running on Now 2.0. This is a FaunaDB query result: <hr> '+JSON.stringify(data));
  });
});

server.listen();
