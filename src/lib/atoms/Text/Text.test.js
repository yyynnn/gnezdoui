import React, { useState } from 'react'
import userEvent from 'user-event'
import { render, fireEvent, cleanup, getByText } from 'react-testing-library'

import { Text } from './Text'

afterEach(cleanup)

it('Toggle and its text render properly, switching between states is working', () => {
  const test_text = 'TEST'
  const { getByTestId } = render(<Text>{test_text}</Text>)
  const textBlock = getByTestId('text')
  // userEvent.click(toggle)
  // expect(toggle).toHaveProperty('checked', true)
  // userEvent.click(toggle)
  // expect(toggle).toHaveProperty('checked', false)
})
