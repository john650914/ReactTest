const path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    //'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './myComponents/myScript.js'
  ],
  output: {
    path: __dirname+'/scripts/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx?$|\.js$)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  }
}