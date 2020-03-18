import path from 'path'

import compression from 'compression'
import express from 'express'

import { renderer } from '../helpers/renderer'

const IS_PROD = process.env.NODE_ENV === 'production'

export const routes = app => {
  IS_PROD && app.use(compression())
  app.use(express.static(path.resolve(__dirname, '../../build')))
  app.get(/^[^.]+$/, renderer, app)
}
