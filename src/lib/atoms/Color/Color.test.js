/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Color } from './Color'

import { theme } from 'theme'

// describe what you want to test
describe('Color component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Color color={theme.colors.black} />)
    expect(getByTestId('color')).toBeVisible()
  })
})
