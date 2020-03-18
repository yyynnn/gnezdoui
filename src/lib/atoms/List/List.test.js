/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { List } from './List'

import { list_data } from 'playground/lists/list_data'

describe('🚨🚨🚨 List component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<List size="lg" data={list_data} />)
    expect(getByTestId('list')).toBeVisible()
  })
})
