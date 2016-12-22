var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'ChingChingTest',
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports ={
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('dist/css/main.css', {
            allChunks: true
        })
	],
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /(\.jsx?$|\.js$)/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
		        test: /(\.sass$|\.scss$)/,
		        loader: ExtractTextPlugin.extract('css!sass')
		    }

		]
	},
	sassLoader: {
		includePaths: [__dirname + 'mod']
	}
}