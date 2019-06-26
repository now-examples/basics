var jsonServer = require("json-server");
var db = require("./db.js");
var fs = require("fs");

fs.writeFileSync("/tmp/db.json", JSON.stringify(db()));

var server = jsonServer.create();
var router = jsonServer.router("/tmp/db.json");
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
  console.log("JSON Server is running on http://localhost:" + port);
});
