const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.ts",
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: {
				minifyCSS: true,
				minifyJS: true,
			},
			data: {
				title: "Layout Design",
				apiContext: "projectcontext",
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: "/node-modules",
			},
			{
				test: /\.(png|jpg|jpeg|gig)$/i,
				type: "asset",
			},
			{
				test: /\.(svg)$/i,
				type: "asset/source",
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: "/node-modules",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[hash][ext][query]",
		clean: true,
	},
};
