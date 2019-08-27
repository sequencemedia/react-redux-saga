
require('@babel/register')({
  ignore: [
    /node_modules/
  ]
});

const path = require('path');

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const {
  EnvironmentPlugin
} = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcPath = path.resolve('./src/index.js');
const libPath = path.resolve('./lib');

module.exports = ({ NODE_ENV = 'production' } = process.env) => ({
  mode: NODE_ENV,
  entry: {
    app: srcPath
  },
  output: {
    path: libPath,
    filename: '[name].js'
  },
  stats: {
    colors: true
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
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanOnceBeforeBuildPatterns: [
        path.join(libPath, 'js').concat('/*.js'),
        path.join(libPath, 'js').concat('/*.js.map')
      ]
    }),
    new EnvironmentPlugin({ NODE_ENV }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      },
      parallel: true,
      sourceMap: true,
      cache: true
    })
  ]
});
