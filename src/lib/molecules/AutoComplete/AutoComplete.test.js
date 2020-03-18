/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { AutoComplete } from './AutoComplete'

describe('🚨🚨🚨 AutoComplete component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<AutoComplete />)
    expect(getByTestId('autocomplete')).toBeVisible()
  })
})
