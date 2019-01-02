const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

let config = {
	mode: "development",
	devServer:{
		contentBase: path.resolve(__dirname, "../dist"),
		host: "localhost",
		compress: true,
		port: 8888
	}
};
module.exports = merge(baseConfig, config);
