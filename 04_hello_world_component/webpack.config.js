const path = require('path');

const sourcePath = path.join(__dirname, './client');
const destinationPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  entry: './index.jsx',
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
  devServer: {
      contentBase: './',
      port: 3030,
  }
};