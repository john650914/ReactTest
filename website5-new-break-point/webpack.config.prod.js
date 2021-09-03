const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || './';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	//devtool: 'source-map',
	context: path.resolve(__dirname, 'src'),
	entry: ['./assets/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/default.js',
		publicPath: ASSET_PATH
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
				test: /\.(sass|scss|css)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../../'
						}
					},
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'autoprefixer'
								]
							}
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: '[path][name][ext]'
				}
			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: 'body',
			minify: false
		})
	]
};