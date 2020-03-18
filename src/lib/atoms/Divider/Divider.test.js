/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Divider } from './Divider'

import { theme } from 'theme'

describe('🚨🚨🚨 Divider component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Divider />)
    expect(getByTestId('divider')).toBeVisible()
  })
})
