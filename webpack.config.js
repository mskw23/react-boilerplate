const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(`${__dirname}/build`),
	},
	devtool: 'source-map',
	devServer: {
		port: 3000,
		historyApiFallback: true,
		inline: true,
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
		alias: {
			components: path.resolve(__dirname, 'src/app/components'),
			ducks: path.resolve(__dirname, 'src/app/redux/ducks'),
			utils: path.resolve(__dirname, 'src/utils.ts'),
		},
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader?name=/public/assets/images/[name].[ext]',
			},

			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		// new CopyPlugin({patterns: [
		// 	{
		// 		from: './src/assets/images/**/*.png',
		// 		to: './public/assets/images',
		// 		transformPath(targePath, absolutePath) {
		// 			return Promise.resolve('newPath');
		// 		},
		// 	},
		// 	{
		// 		from: './src/assets/images/**/*.svg',
		// 		to: './public/assets/images',
		// 		transformPath(targePath, absolutePath) {
		// 			return Promise.resolve('newPath');
		// 		},
		// 	},
		// ]}),
		// new CopyPlugin({patterns: [{ from: './src/assets/images/*/**', to: './public/assets/images' }]}),
	],
};
