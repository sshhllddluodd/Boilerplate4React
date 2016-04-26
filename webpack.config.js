var webpack = require('webpack');
module.exports = {
    entry: {
        es: './src/es.js',
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};