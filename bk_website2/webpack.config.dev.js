const path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: [
    './myComponents/myScript.js'
  ],
  output: {
    path: __dirname+'/dist/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /(\.jsx?$|\.js$)/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.sass$|\.scss$)/,
        loaders: ["style", "css", "sass"],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file",
        exclude: /node_modules/
      },
      /*{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&minetype=application/font-woff",
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file",
        exclude: /node_modules/,
        include: __dirname
      }*/
    ],
  }
}