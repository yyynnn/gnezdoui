import * as React from 'react'
import { render, hydrate } from 'react-dom'

import { App } from './App'

import { root } from 'utils/universalRoot'

const appId = process.env.APP_ID
const element = root.document.getElementById(appId)

const IS_SSR = process.env.IS_SSR

if (!+IS_SSR) {
  // eslint-disable-next-line no-console
  console.log('app rendered')
  render(<App />, element)
} else {
  hydrate(<App />, element)
  // eslint-disable-next-line no-console
  console.log('app hydrated')
}
