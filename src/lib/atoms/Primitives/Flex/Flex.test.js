/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Flex } from './Flex'

describe('🚨🚨🚨 Flex component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(<Flex />)
    expect(getByTestId('flexbox')).toBeVisible()
  })
})
