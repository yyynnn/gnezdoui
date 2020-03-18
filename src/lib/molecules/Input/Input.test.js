/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Input } from './Input'

import { theme } from 'theme'

describe('🚨🚨🚨 Input component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Input />)
    expect(getByTestId('input')).toBeVisible()
  })
})
