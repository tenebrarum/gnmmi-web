/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: './dist',
    },
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
})
