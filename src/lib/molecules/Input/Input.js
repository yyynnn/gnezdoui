/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React, { useState, useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

import { Spacer } from '../../atoms/Spacer/Spacer'
import { Text } from '../../atoms/Text/Text'

import { InputLabel } from './atoms/InputLabel'
import { InputControl } from './atoms/InputControl'

import { theme } from 'theme'

const borderWidth = 2

export const Input = ({
  label,
  info,
  tooltip,
  disabled,
  readOnly,
  placeholder,
  placeholderChar = '_',
  type = 'text',
  error,
  errorMsg,
  value,
  mask,
  hidden = false,
  onChange,
  inputRef,
  children,
  size = 'lg',
  clear,
  onClear,
  clearTreshold,
  guide = false,
  showMask = false,
  onFocus,
  onClick,
  ...rest
}) => {
  const labelProps = {
    label,
    info,
    tooltip
  }
  const inputProps = {
    ref: inputRef,
    mask,
    disabled,
    readOnly,
    placeholder,
    type,
    onChange,
    value
  }
  const controlProps = {
    clear,
    value,
    onClear,
    clearTreshold,
    size
  }

  !!value && (inputProps['value'] = value)
  const setCaret = e => {
    if (guide && mask) {
      const input = e.target
      const str = input.value
      let idx = 0
      str.split('').forEach((char, i) => {
        if (char !== placeholderChar) {
          idx = i
        }
      })
      if (input.selectionStart - 1 > idx) {
        input.setSelectionRange(idx + 1, idx + 1)
      }
    }
  }

  return (
    <Wrapper data-testid="input" hidden={hidden}>
      {label && <InputLabel {...labelProps} />}
      <InputBodyWrapper size={size} error={error} disabled={disabled} readOnly={readOnly}>
        {mask ? (
          <MaskedInput
            guide={guide}
            showMask={showMask}
            placeholderChar={placeholderChar}
            {...inputProps}
            {...rest}
            onClick={e => {
              setCaret(e)
              onClick && onClick(e)
            }}
            onFocus={e => {
              setCaret(e)
              onFocus && onFocus(e)
            }}
          />
        ) : (
          <input {...inputProps} {...rest} />
        )}
        {clear && onClear && <InputControl {...controlProps} />}
        {children}
      </InputBodyWrapper>
      {!label && !tooltip && info && (
        <Fragment>
          <Spacer space={theme.spacings.xs4} />
          <InputLabel {...labelProps} />
        </Fragment>
      )}
      {error && (
        <Error>
          <Spacer space={theme.spacings.xs4} />
          {errorMsg}
        </Error>
      )}
    </Wrapper>
  )
}

const Error = styled(Text)`
  color: ${theme.colors.orange.primary};
`

const InputBodyWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  transition: all ${theme.transitions.basic};
  pointer-events: ${({ disabled, readOnly }) => (disabled || readOnly ? 'none' : 'all')};
  width: 100%;
  height: ${({ size }) => theme.sizes.greater[size]}px;
  border: 2px solid transparent;
  border-color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly ? theme.colors.gray.g700 : error ? theme.colors.orange.primary : theme.colors.gray.g400};
  border-radius: ${theme.radiuses.basic}px;
  background-color: ${({ disabled, readOnly }) => (disabled || readOnly ? theme.colors.gray.g700 : theme.colors.white)};
  :hover {
    border-color: ${({ disabled, error }) =>
      error ? theme.colors.orange.hover : disabled ? theme.colors.gray.g700 : theme.colors.gray.g300};
  }
  :focus-within {
    border-color: ${({ error }) => (error ? theme.colors.orange.primary : theme.colors.gray.primary)};
  }
  input {
    box-sizing: border-box;
    outline: none;
    border: 0;
    width: inherit;
    border-radius: 2px;
    padding: ${({ size }) => (size === 'lg' ? '12px 50px 12px 18px' : '10px 42px 10px 14px')};
    font-size: ${({ size }) => theme.font_sizes[size]}px;
    line-height: ${({ size }) => (size === 'lg' ? 24 : 20)}px;
    font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
    background-color: ${({ readOnly }) => (readOnly ? theme.colors.gray.g700 : theme.colors.white)};
    color: ${({ disabled }) => (disabled ? theme.colors.gray.g300 : theme.colors.gray.primary)};
    ::placeholder {
      color: ${theme.colors.gray.g300};
      opacity: 1;
    }
    :disabled {
      background-color: ${theme.colors.gray.g700};
    }
  }
`

const Wrapper = styled.div`
  flex-direction: column;
  position: relative;
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
`

Input.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  hidden: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['lg', 'md']),
  clear: PropTypes.bool,
  onClear: PropTypes.func,
  clearTreshold: PropTypes.number,
  guide: PropTypes.bool,
  placeholderChar: PropTypes.string,
  showMask: PropTypes.bool
}
