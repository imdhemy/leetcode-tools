const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      main: 'main.js',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        'icon.png',
        'manifest.json',
      ],
    }),
  ],
  module: {},
};
