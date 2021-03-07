const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/app'),
      '#': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
     ]
   },
   plugins: [htmlPlugin]
};
