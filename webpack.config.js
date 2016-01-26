'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const process = require('process');

const config = {
	entry: {
		vendor: [
			'imports?exports=>false&module=>false!jquery',
			'imports?exports=>false&module=>false!react',
			'react-dom',
			'imports?exports=>false&module=>false!bootstrapjs'
		],
		app: './src/index.js'
	}, 
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: process.env.PUBLIC_PATH || '/'
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.less'],
		root: __dirname,
		alias: {
			jquery: 'jquery/dist/jquery.min.js',
			react: 'react/dist/react.min.js',
			'react-dom': 'react-dom/dist/react-dom.min.js',
			'bootstrapjs': 'bootstrap/dist/js/bootstrap.min.js'
		}
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, loader: 'eslint', exclude: /node_modules/}  
		],
		loaders: [
			{ test: /\.js/, loaders: ['babel'], exclude: /node_modules/ },
			{ test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100000&mimetype=image/svg+xml' },
			{ test: /\.jpg$/, loader: 'url?limit?100000'}
		],
		noParse: [
			/react\.min\.js$/,
			/jquery\.min\.js$/,
			/bootstrap\.min\.js$/
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],				
	progress: true,
	target: 'web'
};

if (process.env.NODE_ENV !== 'production') {
	config.entry.vendor = config.entry.vendor.concat([
		'./hotReload',
		'webpack/hot/dev-server'
	]);
	config.module.loaders = config.module.loaders.concat([
		{ test: /\.less/, loaders: [
			'style',
			'css?sourceMap',
			'less?sourceMap'
		]}
	]);
	config.devtool = 'eval-cheap-module-source-map';
	config.debug = true;
} else {
	config.plugins = config.plugins.concat([
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('[name].css')
	]);
	config.module.loaders = config.module.loaders.concat([
		{ test: /\.less/, loader: ExtractTextPlugin.extract(
			'style',
			'css-loader?sourceMap&minimize!less-loader?sourceMap'
		)}
	]);
	config.devtool = 'source-map';
	config.debug = false;
}

module.exports = config;
