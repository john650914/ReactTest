const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve("src"),
	entry:{
		bundle: "components/app"
	},
	output:{
		path: path.resolve("dist"),
		filename: "js/[name].js",
	},

	devServer:{
		stats:{
			hash:         false,
			version:      false,
			timings:      true,
			assets:       true,
			chunks:       false,
			chunkModules: false,
			modules:      false,
			cached:       false,
			reasons:      false,
			source:       false,
			errorDetails: true,
			chunkOrigins: false,
			color: true,
		}
	},

	resolve:{
		root: [
			path.resolve("src"),
			path.resolve("src/css/sass"),
			path.resolve("src/img"),
			path.resolve("src/components"),
			path.resolve("node_modules")
		],
		extensions:["",".js",".jsx","css","scss","sass"]
	},
	resolveLoader:{
		root: path.resolve("node_modules")
	},
	devtool: "cheap-eval-source-map",
	module:{
		loaders:[{
			test: /\.(jsx|js)$/,
			loader: "babel?presets[]=react&presets[]=es2015",
			include: path.resolve("src")
		},{
			test: /\.sass/,
		    loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
		},{
			test: /\.html$/,
			loader: "file?name=[path][name].html",
			include: path.resolve("src")
		},{
			test: /sprites\.png/,
			loader: "file?name=../[path][name].[ext]?01251545",
			include: path.resolve("src")
		}]
	},
	plugins: [
        new ExtractTextPlugin("css/main.css")
    ]
};
