/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Heading } from './Heading'

import { theme } from 'theme'

describe('🚨🚨🚨 Heading component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Heading />)
    expect(getByTestId('heading')).toBeVisible()
  })
})
