export const polyfillsServ = () => {}

export const polyfills = {
  dev: [
    'eventsource-polyfill',
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?quiet:true'
  ],
  devWDS: ['eventsource-polyfill', '@babel/polyfill', 'react-hot-loader/patch'],
  prod: ['@babel/polyfill'],
  server: ['@babel/polyfill']
}
