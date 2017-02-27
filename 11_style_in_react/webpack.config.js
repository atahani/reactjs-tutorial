const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './client');
const destinationPath = path.join(__dirname, './dist');

module.exports = {
    devtool: 'eval',
    context: sourcePath,
    entry:[
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.jsx'
    ],
    output: {
      filename: 'bundle.js',
      path: destinationPath,
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },
      ],
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
          path.resolve(__dirname, 'node_modules'),
          sourcePath
        ],
    },
  
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './',
        port: 3030,
        hot: true,
        publicPath: '/',
    }
};