import path from 'path'

import { aliasConfig } from './aliases'

export const common = {
  context: process.cwd(), // project root
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'bundle.[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          },
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|ico|jpe?g)$/i,
        use: ['file-loader?limit=10000', 'img-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          publicPath: '/',
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: aliasConfig.aliases,
    extensions: ['*', '.js', '.jsx', '.css']
  }
}
