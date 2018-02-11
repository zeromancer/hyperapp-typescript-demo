const path = require("path")
const merge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const commonConfig = require("./common.config")

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development",
})

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
          // use style-loader in development
          fallback: "style-loader",
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin("style.css"), new UglifyJSPlugin()],
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../public"),
  },
})
