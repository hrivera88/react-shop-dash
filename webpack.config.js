const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: '/src/index.tsx',
	devServer: {
		open: true,
		host: 'localhost',
		liveReload: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
