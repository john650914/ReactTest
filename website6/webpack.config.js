const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	context: path.resolve(__dirname, 'src'),
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
			watch: true,
		},
		port: 9000,
		hot: true,
		open: 'index.html'
	},
	entry: ['./assets/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/index.js'
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
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: '[path][name][ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: true
		})
	]
};