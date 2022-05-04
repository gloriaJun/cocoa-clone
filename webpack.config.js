const path = require("path");
const miniCssExtract = require("mini-css-extract-plugin");

module.exports = {
  // 번들링 시작 위치
  entry: {
    app: "src/frontend/static/js/index.ts",
  },
  // 번들 결과물 위치
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   configFile: path.join(rootDir, "/.babelrc.js"),
            // },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          miniCssExtract.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new miniCssExtract({ filename: "../css/bundle.css" })],
};

// const glob = require('glob');
// const path = require('path');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
//     dir => new HtmlWebpackPlugin({
//         filename: path.basename(dir), // Output
//         template: dir, // Input
//     }),
// );

// module.exports = {
//     mode: 'development',
//     stats: {
//         colors: true,
//     },
//     devtool: 'source-map',
//     entry: {
//         index: './src/index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'app.bundle.js',
//     },
//     devServer: {
//         contentBase: 'src',
//         watchContentBase: true,
//         hot: true,
//         open: true,
//         port: process.env.PORT || 9000,
//         host: process.env.HOST || 'localhost',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(sass|scss)$/,
//                 use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
//             },
//         ],
//     },
//     plugins: [
//         new CopyWebpackPlugin([
//             {
//                 from: './src/styles/',
//                 to: './static/',
//             },
//         ]),
//         ...generateHTMLPlugins(),
//     ]
// };
