/* eslint-disable no-console */
import path from 'path'

import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import merge from 'webpack-merge'
import WebpackBar from 'webpackbar'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { common } from './common'
import { clientEntries } from './entries'

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')

const wdsDevConfig = merge(common, {
  name: 'client',
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: clientEntries,
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath: '/',
    compress: true,
    port: env.PORT,
    hot: true,
    overlay: true,
    filename: 'bundle.app.js',
    historyApiFallback: { disableDotRule: true },
    proxy: {
      '/proxy': {
        target: 'futureapi.com',
        secure: false,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: env.APP_ID,
      mobile: true,
      links: [],
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      title: 'UIKIT'
    }),
    new WebpackBar(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin({ basePath: '/' }),
    new webpack.DefinePlugin({
      'process.env': {
        APP_ID: JSON.stringify(env.APP_ID)
      }
    })
  ]
})

module.exports = wdsDevConfig
