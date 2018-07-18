const path = require('path');
const {
  DefinePlugin
} = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const outputPath = path.resolve('./lib');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'sourcemap',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
      cache: true
    })
  ]
};
