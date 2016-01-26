module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'test/**/*.js'
        ],
        frameworks: ['phantomjs-shim','jasmine'],
        preprocessors: {
            'test/**/*.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            module: {
                preLoaders: [
                    { test: /\.js$/, loader: 'eslint', exclude: /node_modules|test/}
                ],
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
                ]
            }
        }
    });
};