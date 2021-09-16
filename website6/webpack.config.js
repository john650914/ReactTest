const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || './';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

var config = {
	context: path.resolve(__dirname, 'src'),
	entry: ['./assets/js/main.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
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
			title: '這是首頁',
			meta: {
				'viewport': 'width=device-width, initial-scale=1.0',
				'og:title': {property: 'og:title', content: '這是首頁的og:title'}
			},
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
			minify: false
		})
	]
};

module.exports = (env, arg) => {
	if (arg.mode === 'development') {
		config.devServer = {
			static: {
				directory: path.join(__dirname, 'src'),
				watch: true,
			},
			host: 'local-ip',
			port: 9000,
			hot: true,
			open: 'index.html'
		}
		config.devtool = 'eval-cheap-module-source-map';
	}

	if (arg.mode === 'production') {
		config.output.publicPath = ASSET_PATH;
		config.plugins.push(new CleanWebpackPlugin());
		config.optimization = {
			runtimeChunk: {
				name: 'manifest',
			},
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
						name: 'vendors',
						enforce: true,
					},
					default: false,
				}
			}
		}
	}

	return config;
}