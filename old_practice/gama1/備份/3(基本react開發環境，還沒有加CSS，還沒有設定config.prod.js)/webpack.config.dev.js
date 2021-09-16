var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
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
	devServer: { //怎麼覺得webpack-dev-server現在不用設定預設就有HMR了？
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //怎麼覺得webpack-dev-server現在不用設定預設就有HMR了？
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		})
	]
};