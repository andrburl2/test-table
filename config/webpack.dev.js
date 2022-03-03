const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
    ],
  },
})