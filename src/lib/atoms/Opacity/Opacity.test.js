/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Opacity } from './Opacity'

import { theme } from 'theme'

describe('🚨🚨🚨 Opacity component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Opacity />)
    expect(getByTestId('opacity')).toBeVisible()
  })
})
