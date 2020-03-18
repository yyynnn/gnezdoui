import path from 'path'

import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import WebpackBar from 'webpackbar'
import merge from 'webpack-merge'
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'

import { clientEntries } from './entries'
import { common } from './common'

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})
// eslint-disable-next-line no-console
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')

export const devConfig = merge(common, {
  name: 'client',
  mode: 'development',
  entry: clientEntries,
  plugins: [
    new WebpackBar(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin({ basePath: '/' }),
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        IS_SSR: JSON.stringify(process.env.IS_SSR),
        BASE_API: JSON.stringify(process.env.BASE_API),
        APP_ID: JSON.stringify(env.APP_ID)
      }
    })
  ]
})

module.exports = devConfig
