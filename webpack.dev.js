const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config");
module.exports = merge(common, {
	mode: "development",
	devtool: "eval-cheap-module-source-map",
	devServer: {
		liveReload: true,
		headers: {
			"Access-Control-Allow-Origin": "",
			"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,PATCH,OPTIONS",
			"Access-Control-Allow-Headers":
				"X-Requested-With, content-type,Authorization",
		},
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
	},
});
