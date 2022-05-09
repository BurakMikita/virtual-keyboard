const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');




module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
	 clean: {
		keep: /\.git/,
	},
  },
  mode: 'production',
  plugins: [
	new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html'
    }),
	 new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: [
			'**/*',
			'!.git',
		],
	}),
 ],
 module: {
 rules: [
	{
	  test: /\.css$/i,
	  use: ["style-loader", "css-loader"],
	},
	{
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	 },
	 {
		test: /\.s[ac]ss$/i,
		use: ["style-loader",	 "css-loader",	  "sass-loader"	],
	 },
 ]
},
devServer: {
	static: './dist',
	port: 3001,
	open: 'Google Chrome',
	
 },

 
};