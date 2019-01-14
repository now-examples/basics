const { join } = require("path");

const app = require("../../util/app");
const baseTemplate = require("../../util/baseTemplate");

app.get("*", async (req, res) => {
  res.append("content-type", "text/html");
  res.end(
    baseTemplate(`
    <img alt="Dream" src="https://api.deepai.org/job-view-file/${req.query.id}/outputs/output.jpg" /><br>
    <a
        class="button"
        href="/">Make Your Own!</a
      >`),
  );
});

module.exports = app;
