/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Spacer } from './Spacer'

import { theme } from 'theme'

describe('🚨🚨🚨 Spacer component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Spacer />)
    expect(getByTestId('spacer')).toBeVisible()
  })
})
