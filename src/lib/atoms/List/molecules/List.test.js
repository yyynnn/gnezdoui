/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, fireEvent, cleanup, getByText } from 'react-testing-library'

import { List } from '../List'

import { list_data } from 'playground/lists/list_data'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

// what to test
it('List is being rendered right', () => {
  const { getByText } = render(<List data={list_data} size="md" />)

  // getting main text by text
  const textMain = getByText(list_data[0].text)

  // check if visible
  expect(textMain).toBeVisible()
})
