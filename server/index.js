/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { polyfillsServ } from 'config/polyfills'

const IS_FULL_ICU = new Intl.DateTimeFormat('ru', { month: 'long' }).format(new Date(9e8)) === 'январь'

const envInit = () => require('dotenv').config()
const assetResolver = () => {
  require('asset-require-hook')({
    extensions: ['.png', '.jpg', '.jpeg', '.woff', '.woff2', '.ico', '.css', '.svg'],
    limit: 10000
  })
}

polyfillsServ()
envInit()
assetResolver()

// ALL OF THIS IS ^ NEEDED TO BE LOADED BEFORE SERVER INIT

const runServer = require('./server')

IS_FULL_ICU
  ? runServer()
  : console.error('Check NODE_ICU_DATA env variable! It should be in cross-env before node. Exiting...')

process.on('uncaughtException', err => {
  console.error(err)
  // eslint-disable-next-line no-magic-numbers
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.error(err)
})
