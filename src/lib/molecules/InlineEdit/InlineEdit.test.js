/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { InlineEdit } from './InlineEdit'

describe('🚨🚨🚨 InlineEdit component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<InlineEdit />)
    expect(getByTestId('inlineEdit')).toBeVisible()
  })
})
