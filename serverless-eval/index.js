const { text } = require("micro");
const { parse } = require("querystring");
const evaluateIncomingJS = require("./lib/eval");

module.exports = async (req, res) => {
  // Parse code received through req
  const body = parse(await text(req));
  let result, attachment;

  try {
    // Pass code to function imported through eval
    result = evaluateIncomingJS(body.text, 2500);
  } catch (error) {
    // Capture any errors
    result = error.message;
    attachment = [{ text: error.stack }];
  }

  const message = "`" + body.text + "`: " + result;

  res.writeHead(200, { "Content-Type": "application/json" });
  // Create response object and send result back to Slack
  res.end(JSON.stringify({ "in_channel", message, attachment }));
};
