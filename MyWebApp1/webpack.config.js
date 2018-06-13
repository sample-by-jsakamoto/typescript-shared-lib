const path = require('path');

module.exports = {
    entry: ['./ClientApp/app/bootstrap.ts'],
    output: {
        filename: './wwwroot/js/bundle.js',
        publicPath: 'js/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            app: path.resolve(__dirname, 'ClientApp/app')
        }
    },
    module: {
        loaders: [
            { test: /\.ts$/, use: ['awesome-typescript-loader'] },
            { test: /\.html$/, loader: 'html-loader?minimize=false' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
        ]
    },
    devtool: 'source-map'
};