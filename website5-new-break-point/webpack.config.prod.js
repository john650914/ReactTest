const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	context: path.resolve(__dirname, 'src'),
	entry: ['./assets/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/default.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: 'body'
		})
	]
};