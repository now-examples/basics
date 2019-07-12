const API = require("json-server");
const db = require("./db.js");
const routes = require("./routes.json");
const fs = require("fs");
const os = require("os");

const filePath = os.tmpdir() + "/db.json";
fs.writeFileSync(filePath, JSON.stringify(db()));

const jsonAPI = API.create();
const router = API.router(filePath);

jsonAPI.use(API.rewriter(routes));
jsonAPI.use(API.bodyParser);
jsonAPI.use(router);

module.exports = jsonAPI;
