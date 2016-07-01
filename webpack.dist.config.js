var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'anaheim.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  externals: {
    'jquery': true,
    'angular': true
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style!css'},
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: []
};
