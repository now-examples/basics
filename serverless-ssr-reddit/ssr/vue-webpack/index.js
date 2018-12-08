const { default: fetch } = require("node-fetch");
const getQueryParams = require("../../utils/getQueryParams");
const withHtmlShell = require("../../utils/withHtmlShell");

// If this is 0, the lambda is cold. 😉
let invoked = 0;

// Cache the Vue server renderer instance between lambda invocations.
let renderer = null;

module.exports = async (req, res) => {
  // Calculate boot costs.
  console.time(`Import vue, invoked (again) ${invoked}`);
  if (!renderer) {
    const { createBundleRenderer } = require("vue-server-renderer/build");
    const serverBundle = require("./dist/vue-ssr-server-bundle.json");

    renderer = createBundleRenderer(serverBundle, {
      template: withHtmlShell("vue")("<!--vue-ssr-outlet-->"),
      runInNewContext: false // Recommended by the Vue SSR documentation
    });
  }
  console.timeEnd(`Import vue, invoked (again) ${invoked}`);

  // Reset a mock on each invocation because we mutate it in case of a query param
  // and state is persisted while the function is warm.
  let mock = require("../../utils/mock");

  // Fetch if we have the query param.
  const queryParams = getQueryParams(req);
  if (queryParams.fetch) {
    const response = await fetch(
      `https://reddit.com/r/${queryParams.fetch}.json`
    );
    mock = await response.json();
  }

  // Create a context for this invocation.
  const context = {
    data: {
      ...mock,
      isHomePage: !queryParams.fetch
    }
  };

  // Just put it.
  res.writeHead(200, { "content-type": "text/html" });
  res.end(await renderer.renderToString(context));

  // This has been invoked.
  invoked++;
};
