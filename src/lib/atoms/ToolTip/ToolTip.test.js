/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { ToolTip } from './ToolTip'

import { theme } from 'theme'

describe('🚨🚨🚨 ToolTip component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<ToolTip />)
    expect(getByTestId('tooltip')).toBeVisible()
  })
})
