const path = require("path");

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, "/.next/server/pages/_app.js"),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, "/client/dist/js"),
    filename: "_app.js",
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
};
