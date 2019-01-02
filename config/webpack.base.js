const path = require("path");

module.exports = {
	//入口文件
	entry: {
		main: "./src/index.js"
	},

	//出口文件
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [["env"],["react"]],
					plugins: [
						"transform-class-properties"//支持类里使用箭头函数
					]
				}			
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
				loader: 'url-loader?limit=1024'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(mp4|ogg|svg)$/,
				loader: 'file-loader'
			}
		]
	},

	plugins: []
};