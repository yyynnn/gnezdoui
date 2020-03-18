/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Button } from './Button'

import { theme } from 'theme'

describe('🚨🚨🚨 Button component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Button />)
    expect(getByTestId('button')).toBeVisible()
  })
})
