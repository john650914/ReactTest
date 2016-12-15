var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /(\.sass$|\.scss$)/,
				loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer!sass')
			},
			{
				test: /\.(jpg|gif|png)$/,
				loader: 'url-loader?limit=1024&name=[path][name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			inject: 'body',
		}),
		new ExtractTextPlugin('style/main.css', {
			allChunks: true
		})
	]
};