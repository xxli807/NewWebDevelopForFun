var path = require('path');
var webpack = require('webpack');
var PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
    module: {
        loaders: [
           {
                test: /\.s?(c|a)ss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    },
    entry: {
        app: ['./ClientApp/index.js']
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
         // preload chunks
        new PreloadWebpackPlugin(),
    ],
    devServer: {
        contentBase: './ClientApp',
        historyApiFallback: true,
        port: 3000,
        host: 'localhost',
    }
};
