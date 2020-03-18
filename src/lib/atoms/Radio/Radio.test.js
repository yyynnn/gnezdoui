/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Radio } from './Radio'

import { theme } from 'theme'

describe('🚨🚨🚨 Radio component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Radio />)
    expect(getByTestId('radio')).toBeVisible()
  })
})
