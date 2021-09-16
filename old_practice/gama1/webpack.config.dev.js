var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'assets/script/bundle.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: /(\.sass$|\.scss$|\.css$)/,
				//loader: ExtractTextPlugin.extract('css?sourceMap!sass')
				//loader: ["style-loader", "css-loader", "sass-loader"]
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//use: ["css-loader", "sass-loader"]
					use: [{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
			},
			{
				test: /\.(jpg|gif|png)$/,
				include: path.resolve('src'),
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: true,
							publicPath: '',
							name: '[name].[ext]?[hash]',
							emitFile: false,
						},
					},
					{
						loader: 'file-loader',
						options: {
							publicPath: '',
							context: path.resolve('src'),
							name: '[path][name].[ext]?[hash]',
						},
					}
				]
			}/*,
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}*/
		]
	},
	devServer: {
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		}),
		new ExtractTextPlugin('assets/style/main.css', {
			allChunks: true
		})
	]
};


// 還有好多問題要處理喔：
// url-loader亂碼，應該是說，如果需要url-loader要怎麼用
// 圖形檔案路徑（相對路徑）
// 圖形檔案路徑（CDN）
// 確認哪些東西是要放到dependencies裡的
// 打包出來的目錄結構
// 多個進入點怎麼處理
// ExtractTextPlugin好像壞掉了

// webpack.config.prod.js設定：
// webpack.config.prod.js大概要做的事有：
// 壓縮檔案
// 設定debug工具（devtool的source-map 是用於 production，cheap-eval-source-map 是用於 development。）
// 再去google一下看有哪些是必要的，或是有什麼必需知道的知識