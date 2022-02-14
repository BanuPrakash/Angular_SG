const webpack = require('webpack');

const path = require('path'); // built-in node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry:'./src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname, "src","index.html")
    })],
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js'
        ]
    }
}

module.exports = config;