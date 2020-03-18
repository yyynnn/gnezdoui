import React, { useState } from 'react'
import { render } from 'react-testing-library'

import { Icon } from './Icon'

import { theme } from 'theme'

const type = 'check'

describe('Icon', () => {
  it('should support basic usage', () => {
    const { getByTestId } = render(<Icon type={type} />)
    expect(() => getByTestId(`icon_${type}`)).not.toThrowError()
  })
  it('should throw error if no req prop provided', () => {
    const { getByTestId } = render(<Icon fill={theme.colors.black} />)
    expect(() => getByTestId(`icon_${type}`)).toThrowError()
  })
})
