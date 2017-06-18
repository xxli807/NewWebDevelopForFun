var path = require('path');
var webpack = require('webpack');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    module: {
        loaders: [
           {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/
           },
           {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {   enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.s?(c|a)ss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    entry: {
        app: ['./ClientApp/index.tsx']
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
        new CheckerPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx' ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './ClientApp',
        historyApiFallback: true,
        port: 3000,
        host: 'localhost',
    }
};
