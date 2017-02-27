const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './client');
const destinationPath = path.join(__dirname, './dist');

module.exports = {
    devtool: 'eval',
    context: sourcePath,
    // ADD IT
    entry:[
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:3030',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // activate HMR for React
    'react-hot-loader/patch',

    // the entry point of our app
    './index.jsx'
    ],
    output: {
      filename: 'bundle.js',
      path: destinationPath,
      publicPath: './' // ADD IT
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
    
    // ADD IT
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './',
        port: 3030,
        hot: true, // ADD IT
        publicPath: '/', // ADD IT
    }
};