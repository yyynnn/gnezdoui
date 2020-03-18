/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Card } from './Card'

import { theme } from 'theme'

describe('🚨🚨🚨 Card component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Card />)
    expect(getByTestId('card')).toBeVisible()
  })
})
