const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	context: path.resolve(__dirname, 'src'),
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		watchContentBase: true,
		port: 9000,
		hot: true,
		open: true,
		openPage: './index.html'
	},
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