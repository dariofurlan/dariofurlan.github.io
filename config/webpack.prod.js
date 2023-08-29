const path = require('path');
const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js', //[contenthash]
		path: path.resolve(process.cwd(), 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						configFile: path.resolve(process.cwd(), "config/babel.config.json"),
					}
				},
			},
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	optimization: {
		runtimeChunk: {name:'runtime'},
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: (module, chunks) => {
						const allChunksNames = chunks.map((item) => item.name).join('-');
						return `vendor~${allChunksNames}`;
					},
					chunks: "all",
				},
				default: {
					test: /[\\/]src[\\/]/,
					name: (module, chunks, cacheGroupKey) => {
						const allChunksNames = chunks.map((item) => item.name).join('-');
						return `${allChunksNames}`;
					}
				},
			},
		},
		concatenateModules: true
	},
});
