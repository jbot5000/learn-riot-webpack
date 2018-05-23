const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        vendor: [
            'riot'
        ],
        app: './app.es6',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({riot: 'riot'})
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'customized-riotjs-loader',
                query: { type: 'none' }
            },
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }
        ]
    }
}
