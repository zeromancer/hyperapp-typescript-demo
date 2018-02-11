const path = require("path")
const merge = require("webpack-merge")
const commonConfig = require("./common.config")

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "#inline-source-map",
})
