/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import { Accordion } from './Accordion'

import { accordion_test_data } from 'playground/accordion/accordion_test_data'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

// describe what you want to test
it('Accordion renders without errors and collapse item opens and closes on sequential clicks', () => {
  // render component with some data and provide selector func
  const { getByText } = render(<Accordion items={accordion_test_data} size="md" />)

  // use select func to get sub-componet by text
  const collapseTitle = getByText(accordion_test_data[0].title)

  // click that shit
  fireEvent.click(collapseTitle)

  // select other sub component by text
  const collapseText = getByText(accordion_test_data[0].text)

  // check if visible
  expect(collapseText).toBeVisible()

  // click it again
  fireEvent.click(collapseTitle)

  // check if collapsed (not visible)
  setTimeout(() => expect(collapseText).not.toBeVisible(), 1000)
})
