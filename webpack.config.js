const glob = require('glob');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
    dir => new HtmlWebpackPlugin({
        filename: path.basename(dir), // Output
        template: dir, // Input
    }),
);

module.exports = {
    mode: 'development',
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: 'src',
        watchContentBase: true,
        hot: true,
        open: true,
        port: process.env.PORT || 9000,
        host: process.env.HOST || 'localhost',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/styles/',
                to: './static/',
            },
        ]),
        ...generateHTMLPlugins(),
    ]
};