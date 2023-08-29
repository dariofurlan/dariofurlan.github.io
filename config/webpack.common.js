const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
	entry: {
		main: './src/index.tsx',
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js', //[contenthash]
		path: path.resolve(process.cwd(), 'dist'),
	},
	target: ['web', 'es5'],
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			"@types": path.resolve(process.cwd(), 'src/@types'),
			application: path.resolve(process.cwd(), "src/application"),
			components: path.resolve(process.cwd(), 'src/components'),
			contexts: path.resolve(process.cwd(), 'src/contexts'),
			hooks: path.resolve(process.cwd(), 'src/hooks'),
			modules: path.resolve(process.cwd(), 'src/modules'),
			providers: path.resolve(process.cwd(), 'src/providers'),
			resources: path.resolve(process.cwd(), 'src/resources'),
			routes: path.resolve(process.cwd(), 'src/routes'),
			shared: path.resolve(process.cwd(), 'src/shared'),
			styles: path.resolve(process.cwd(), 'src/styles'),
		},
	},
	module: {
		rules: [
			{
				test: /^\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			// {
			// 	test: /resources\/.*\.svg$/i,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].[ext]',
			// 				outputPath: 'resources/skills',
			// 			}
			// 		},
			// 	],
			// },
			{
				test: /\.(ts|tsx)$/,
				exclude: /(^node_modules) | (\.test\.) | (__tests__) | (^old) /,
				use: [{
					loader: 'ts-loader',
					options: {
						configFile: path.resolve(process.cwd(), "tsconfig.json"),
					}
				}],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico'
		}),
		new CopyPlugin({
			patterns: [
			 	{ from: "public/resources/skills", to: path.resolve(process.cwd(), 'dist/resources/skills') },
			],
		}),
	],
};
