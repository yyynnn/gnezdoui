/* eslint-disable no-magic-numbers */
import React from 'react'
import { render } from 'react-testing-library'

import { Avatar } from './Avatar'

describe('🚨🚨🚨 Badge component', () => {
  it('renders', () => {
    // render component with some data and provide selector func
    const { getByTestId } = render(
      <Avatar
        name="Тарас Обамос"
        size="3XL"
        image="https://cdn1.savepice.ru/uploads/2019/7/15/64a86751edd49f6741cac55c09ff95f6-full.png"
      />
    )
    expect(getByTestId('avatar')).toBeVisible()
  })
})
