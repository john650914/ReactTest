const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './myComponents/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}