const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "./index.js")],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 9000
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  watch: true,
  plugins: [new ExtractTextPlugin("style.css")]
};
