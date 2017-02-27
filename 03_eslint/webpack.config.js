var path = require('path');
var webpack = require("webpack");

var sourcePath = path.join(__dirname, './client');
var destinationPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: destinationPath,
  },
  module: {
    rules: [
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
  // ADD
  devServer: {
      contentBase: './',
      port: 3030,
  }
};