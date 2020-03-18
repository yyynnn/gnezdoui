/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Badge } from './Badge'

import { theme } from 'theme'

describe('🚨🚨🚨 Badge component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Badge value={100} size="lg" type="primary" dynamic={true} />)
    expect(getByTestId('badge')).toBeVisible()
  })
})
