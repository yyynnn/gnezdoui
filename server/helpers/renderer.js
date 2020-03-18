import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import asyncHandler from 'express-async-handler'
import MobileDetect from 'mobile-detect'
import uniqid from 'uniqid'

import { renderHTML } from '../templates/renderHTML'
import { render500 } from '../templates/render500'
import { ServerRoot } from '../templates/ServerRoot'

import { ssrCreateStore } from './store'
import { getSizesFallback } from './sizes'

const IS_PROD = process.env.NODE_ENV === 'production'
const baseApiUri = IS_PROD ? process.env.BASE_API : process.env.DEV_BASE_API
const IS_SSR = !!+process.env.IS_SSR
const buildId = `webpack_build_${uniqid()}`
const statusCode200 = 200
const statusCode500 = 500
const context = {}

export const renderer = asyncHandler(async (req, res) => {
  if (IS_SSR) {
    try {
      const sheet = new ServerStyleSheet()
      const preloadedState = encodeURIComponent(JSON.stringify({}))
      const sizesConfig = getSizesFallback(req.headers['user-agent'])
      const IS_SHITTY = new MobileDetect(req.headers['user-agent']).match('Trident')

      const root = <ServerRoot sizesConfig={sizesConfig} location={req.url} sheet={sheet.instance} context={context} />

      const html = renderToString(root)
      const styleTags = sheet.getStyleTags()

      res.status(statusCode200).send(
        renderHTML({
          html,
          styleTags,
          preloadedState,
          baseApiUri,
          IS_SHITTY,
          buildId
        })
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
      res.status(statusCode500).send(render500({ error, buildId }))
    }
  } else {
    try {
      res.status(statusCode200).send(renderHTML({ baseApiUri, buildId }))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
      res.status(statusCode500).send(render500({ error, buildId }))
    }
  }
})
