var path = require('path');
//var webpack = require('webpack'); //好像用不到！？
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'eventsource-polyfill', //據說可以讓 Webpack 兼容 IE //現在應該不需要了
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ //https://neighborhood999.github.io/webpack-tutorial-gitbook/Part1/
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			inject: 'body',
		})
		//上線時可再加入UglifyJsPlugin、OccurrenceOrderPlugin等的plugin
	]
};