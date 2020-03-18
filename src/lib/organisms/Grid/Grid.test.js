/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Container } from './Container'

import { theme } from 'theme'

describe('🚨🚨🚨 Container component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Container />)
    expect(getByTestId('container')).toBeVisible()
  })
})
