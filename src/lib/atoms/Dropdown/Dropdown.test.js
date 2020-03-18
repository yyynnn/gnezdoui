/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Dropdown } from './Dropdown'

import { theme } from 'theme'

describe('🚨🚨🚨 Dropdown component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Dropdown />)
    expect(getByTestId('dropdown')).toBeVisible()
  })
})
