const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

// Taken and modified from https://vue-loader.vuejs.org/guide/ and
// https://ssr.vuejs.org/guide/build-config.html
module.exports = {
  entry: "./src/app.js",
  target: "node",
  output: {
    libraryTarget: "commonjs2"
  },
  // The Vue SSR documentation recommends externalizing app dependencies.
  // However, due to how @zeit/ncc works, we need to bundle the external deps.
  // externals: {},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new VueSSRServerPlugin()]
};
