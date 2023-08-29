const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js', //[contenthash]
		path: path.resolve(process.cwd(), 'dist'),
		publicPath: '/'
	},
	devServer: {
		compress: false,
		historyApiFallback: {
			index: '/index.html',
		},
		host: 'localhost',
		port: 8082,
		hot: true,
		client: {
			overlay: false,
		},
		open:{
			target: ['http://localhost/'],
		},
	},
	plugins: [
		
	]
});
