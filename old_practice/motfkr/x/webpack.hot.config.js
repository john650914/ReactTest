const path = require("path");

const webpack = require("webpack");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      './components/app'
  	]
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: 'http://localhost:3000/statid/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
	    test: /\.js$/,
	    loaders: [ 'babel' ],
	    exclude: /node_modules/,
	    include: __dirname
      }
    ]
  }
};