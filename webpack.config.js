const path = require('path'),
	  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
	entry: ['./src/app.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	target: "node", 
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
		  }),
	]
};