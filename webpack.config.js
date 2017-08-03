var webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: {
        path: __dirname + '/public/js/',
        publicPath: 'public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/, /server/]
            }
        ]
    }
};