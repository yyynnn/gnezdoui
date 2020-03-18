/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { SocBlock } from './SocBlock'

import { theme } from 'theme'

describe('🚨🚨🚨 SocBlock component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<SocBlock />)
    expect(getByTestId('socblock')).toBeVisible()
  })
})
