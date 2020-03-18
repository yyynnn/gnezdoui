export const wdmStart = app => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const devConfig = require('../../webpack/dev')
  const serverConfig = require('../../webpack/server')

  const compiler = webpack([devConfig, serverConfig])

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: devConfig.output.publicPath,
      historyApiFallback: true,
      hot: true,
      noInfo: false,
      headers: { 'Access-Control-Allow-Origin': '*' },
      inline: true,
      stats: { colors: true }
    })
  )

  const clientCompiler = compiler.compilers.find(c => c.name === 'client')
  app.use(webpackHotMiddleware(clientCompiler))
}
