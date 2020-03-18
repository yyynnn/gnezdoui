/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { InlineFlex } from './InlineFlex'

import { theme } from 'theme'

describe('🚨🚨🚨 Opacity component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<InlineFlex />)
    expect(getByTestId('inlineflexbox')).toBeVisible()
  })
})
