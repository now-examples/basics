const micro = require("micro");
const { text } = micro;
const { parse } = require("querystring");
const evaluateIncomingJS = require("./lib/eval");

// Format results in the structure Slack expects
const responseBody = function (response_type, text, attachments) {
  return { response_type, text, attachments }
}

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
  res.end(JSON.stringify(
    responseBody("in_channel", message, attachment)
  ));
};
