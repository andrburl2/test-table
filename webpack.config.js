const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    watchFiles: 'src/index.html',
    hot: true,
    open: true,
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html'
    }),
    new MiniCssExtractPlugin({filename: 'index.css'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
          test: /\.(scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ]
      }
    ],
  },
}