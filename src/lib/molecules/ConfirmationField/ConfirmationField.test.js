/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { ConfirmationField } from './ConfirmationField'

describe('🚨🚨🚨 ConfirmationField component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<ConfirmationField />)
    expect(getByTestId('confField')).toBeVisible()
  })
})
