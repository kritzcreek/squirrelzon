var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'babel!./src/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/app.js'
  },
  loaders: [
    { test: /\.purs$/,
      loader: 'purs',
      query: { output: 'output' } },
    { test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/}
  ],
  resolve: {
    modulesDirectories: [
      'node_modules',
      'output'
    ]
  },
  plugins: [new HtmlWebpackPlugin({title: 'Squirrelzon'})]
};
