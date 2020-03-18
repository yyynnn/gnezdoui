/* eslint-disable no-magic-numbers */
'use strict'

import { render } from 'react-testing-library'
import isReact from 'is-react'
import React from 'react'

jest.autoMockOff()

const bundle = require('../build/gneznoui.min')

const firstLetterIsUpper = string => string[0] === string[0].toUpperCase()

describe('Production bundle is valid in runtime and', () => {
  Object.keys(bundle)
    .filter(item => {
      return typeof bundle[item] === 'function' && firstLetterIsUpper(item)
    })
    .map(item => {
      const Component = React.createElement(bundle[item])
      const IS_REACT = isReact.compatible(Component)
      it(`${item} is a valid react component`, () => {
        expect(IS_REACT).toBeTruthy()
      })
    })
})
