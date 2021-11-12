/**
 * Webpack config 
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].chaplinforwoo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../'
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/[name].chaplinforwoo.css',
    } ),
    new webpack.ProvidePlugin( {
      Promise: 'es6-promise-promise', // works as expected
    } )
  ]
}