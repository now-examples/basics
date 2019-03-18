// Require FaunaDB Driver
const faunadb = require('faunadb');

// The faunadb.query module contains all of the
// functions to create FaunaDB query expressions.
const q = faunadb.query;

// Initiate the FaunaDB client with a valid secret key.
// The FaunaDB client will be used for issuing the queries.
const client = new faunadb.Client({ secret: process.env.FAUNADB_KEY_SECRET });

module.exports = (req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});

  client
      // Issue a query for prompting a FaunaDB object.
      // The driver will send the query to the FaunaDB
      // Cloud server and return its response.
      .query({salutation: q.Concat(["Hello ", "world."])})
      .then((data) => {
        // Include the query's result in the HTTP Response
        res.end('This is a Node.js server running on Now 2.0. This is a FaunaDB query result: <hr> ' + JSON.stringify(data));
      })
      .catch((err) => {
        // Log the response in case of error
        console.error(err);
        res.end("Error: " + JSON.stringify(err));
      });
}