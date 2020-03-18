/* eslint-disable no-magic-numbers */
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MaskedInput, { conformToMask } from 'react-text-mask'

import { Text } from '../../atoms/Text'
import { Input } from '../Input'

import { theme } from 'theme'

export const PhoneInput = ({
  disabled,
  prefix = '+7 ',
  readOnly,
  mask = ['+', '7', ' ', /[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  placeholder,
  value,
  onChange,
  children,
  autoFocus,
  onFocus,
  onClick,
  onKeyDown,
  ...rest
}) => {
  const handlerChange = e => {
    if (e.target.value.length <= prefix.length) {
      e.target.value = prefix
    }
    onChange && onChange(e)
  }
  const focusHandler = e => {
    if (e.target.selectionStart < prefix.length) {
      e.target.setSelectionRange(3, 3)
    }
    if (e.target && e.target.value.substr(0, prefix.length) !== prefix) {
      e.target.value = prefix
    }
    onFocus && onFocus(e)
  }
  const clickHandler = e => {
    if (!e.target.selectionEnd && e.target.selectionStart < prefix.length) {
      e.target.setSelectionRange(3, 3)
    }
    onClick && onClick(e)
  }
  const keyDownHandler = e => {
    if (e.target.selectionStart < prefix.length && e.keyCode !== 8 && e.keyCode !== 46) {
      e.target.setSelectionRange(3, 3)
    }
    onKeyDown && onClick(onKeyDown)
  }
  return (
    <Wrapper>
      <Input
        value={value}
        keepCharPositions={true}
        autoFocus={autoFocus}
        showMask={true}
        mask={mask}
        placeholder={prefix}
        clearTreshold={prefix.length + 1}
        guide={false}
        onChange={handlerChange}
        disabled={disabled}
        onFocus={focusHandler}
        readOnly={readOnly}
        onClick={clickHandler}
        onKeyDown={keyDownHandler}
        {...rest}
      >
        {children}
      </Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    ::placeholder {
      color: ${theme.colors.gray.primary};
    }
  }
`

PhoneInput.propTypes = {
  prefix: PropTypes.string,
  mask: PropTypes.array
}
