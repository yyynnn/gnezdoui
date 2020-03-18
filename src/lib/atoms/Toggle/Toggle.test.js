import React, { useState } from 'react'
import userEvent from 'user-event'
import { render, fireEvent, cleanup, getByText } from 'react-testing-library'

import { Toggle } from './Toggle'

afterEach(cleanup)

it('Toggle and its text render properly, switching between states is working', () => {
  const checked = false
  const handler = () => {
    return !checked
  }
  const { getByTestId } = render(<Toggle checked={checked} onChange={handler} datatestid="toggle" />)
  const toggle = getByTestId('toggle')
  userEvent.click(toggle)
  expect(toggle).toHaveProperty('checked', true)
  userEvent.click(toggle)
  expect(toggle).toHaveProperty('checked', false)
})

it('Toggle on disabled - non-clickable and it fixed on passed state', () => {
  const checked = false

  const { getByTestId } = render(<Toggle disabled={true} checked={checked} datatestid="toggle1" />)
  const toggle = getByTestId('toggle1')
  userEvent.click(toggle)
  expect(toggle).toHaveProperty('checked', checked)
})

it('Bidirectional toggle: Renders two childs properly', () => {
  const checked = false
  const handler = () => {
    return !checked
  }
  const rubles = 'Рубли'
  const dollars = 'Доллары'
  const { getByText } = render(
    <Toggle leftText={rubles} rightText={dollars} biDir={true} checked={checked} onChange={handler} />
  )
  const leftChild = getByText('Рубли')
  const rightChild = getByText('Доллары')
  expect(leftChild).toBeVisible()
  expect(rightChild).toBeVisible()
})
