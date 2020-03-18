/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Checkbox } from './Checkbox'

import { theme } from 'theme'

describe('🚨🚨🚨 Checkbox component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Checkbox />)
    expect(getByTestId('checkbox')).toBeVisible()
  })
})
