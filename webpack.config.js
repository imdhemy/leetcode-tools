const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    content: './src/content/content.js',
  },
  watch: true,
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
