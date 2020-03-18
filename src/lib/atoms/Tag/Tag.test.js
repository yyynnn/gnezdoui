import React, { useState } from 'react'
import userEvent from 'user-event'
import { render, fireEvent, getByTestId as globGetByTestId, waitForElement } from 'react-testing-library'

import { Tag } from './Tag'

it('Tag renders text properly', async () => {
  const text = 'Na'
  const { getByText } = render(<Tag>{text}</Tag>)
  await waitForElement(() => getByText(text))
})

it('Tag with x icon renders propely and handle function onRemove', async () => {
  window.alert = jest.fn()
  const text = 'Na'
  const { getByTestId } = render(
    <Tag
      onRemove={() => {
        // eslint-disable-next-line no-alert
        alert('clicked')
      }}
    >
      {text}
    </Tag>
  )
  const closeButton = getByTestId('icon_close')
  userEvent.click(closeButton)
  expect(window.alert).toHaveBeenCalledWith('clicked')
})
