var path = require('path');
var webpack = require("webpack");

var sourcePath = path.join(__dirname, './client');
var destinationPath = path.join(__dirname, './dist');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: destinationPath,
  },
  // ADD IT
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
  // ADD IT
  resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ],
  },
};