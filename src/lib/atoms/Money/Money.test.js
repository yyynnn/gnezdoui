/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

import { Money, moneyFormat, testId } from './Money'

const value = '30000'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

// describe what you want to test
describe('Money component', () => {
  it('Renders formatted value prop', () => {
    // render component with some data and provide selector func
    const { getByTestId, getAllByText } = render(<Money value={value} />)
    const fractionDigits = value.includes('.') ? 2 : 0
    const formattedValue = moneyFormat(value, fractionDigits, 'RUB')
    expect(getByTestId(testId)).toBeVisible()
  })
})
