/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Tab } from './organisms/Tab'

describe('🚨🚨🚨 Tab component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Tab />)
    expect(getByTestId('tab')).toBeVisible()
  })
})
