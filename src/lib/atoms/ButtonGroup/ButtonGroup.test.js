/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { ButtonGroup } from './ButtonGroup'

import { theme } from 'theme'

describe('🚨🚨🚨 ButtonGroup component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<ButtonGroup />)
    expect(getByTestId('btn_group')).toBeVisible()
  })
})
