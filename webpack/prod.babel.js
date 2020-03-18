import path from 'path'

import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'
import merge from 'webpack-merge'

import { common } from './common'

const prodConfig = merge(common, {
  entry: path.resolve(__dirname, '../src/lib/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'gneznoui.min.js',
    library: 'gneznoui',
    libraryTarget: 'umd'
  },
  name: 'client',
  mode: 'production',
  devtool: 'hidden-source-map',
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  },
  resolve: {
    alias: {
      gneznoui: path.resolve(__dirname, '../src/lib/')
    }
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
})

module.exports = prodConfig
