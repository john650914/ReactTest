﻿const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	//devtool: 'inline-source-map',
	devtool: 'eval-cheap-module-source-map',
	context: path.resolve(__dirname, 'src'),
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
			watch: true,
		},
		host: 'local-ip',
		port: 9000,
		hot: true,
		open: 'index.html'
	},
	//entry: ['./assets/js/index.js'],
	entry: {
		index: ['./assets/js/common.js', './assets/js/index.js', './assets/css/common.scss', './assets/css/index.css'],
		page: ['./assets/js/common.js', './assets/js/page.js', './assets/css/common.scss', './assets/css/page.css']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							[
								"@babel/plugin-transform-runtime",
								{
									corejs: false
								}
							]
						]
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
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
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
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css'
		}),
		new HtmlWebpackPlugin({
			chunks: ['index'],
			title: '這是首頁',
			meta: {
				'viewport': 'width=device-width, initial-scale=1.0',
				'og:title': {property: 'og:title', content: '這是首頁的og:title'}
			},
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
			minify: false
		}),
		new HtmlWebpackPlugin({
			chunks: ['page'],
			title: '內頁',
			meta: {
				'viewport': 'width=device-width, initial-scale=1.0',
				'og:title': {property: 'og:title', content: '這是內頁的og:title'}
			},
			template: './page.html',
			filename: 'page.html',
			inject: 'body',
			minify: false
		})
	]
};