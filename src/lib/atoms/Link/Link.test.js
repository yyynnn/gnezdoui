/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Link } from './Link'

import { theme } from 'theme'

describe('🚨🚨🚨 Link component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Link />)
    expect(getByTestId('link')).toBeVisible()
  })
})
