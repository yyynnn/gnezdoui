import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import TextareaAuto from 'react-textarea-autosize'

import { InputControl } from '../Input/atoms/InputControl'
import { InputLabel } from '../Input/atoms/InputLabel'
import { Spacer } from '../../atoms/Spacer'
import { Text } from '../../atoms/Text'

import { theme } from 'theme'

const sizes = {
  lg: {
    lineHeight: 24,
    paddingVertical: 14
  },
  md: {
    lineHeight: 20,
    paddingVertical: 12
  }
}
const minimalRows = 3

export const TextArea = ({
  clear = false,
  size = 'lg',
  value,
  onClear,
  autoResize = false,
  onChange,
  children,
  rows = minimalRows,
  label,
  info,
  tooltip,
  disabled,
  readOnly,
  placeholder,
  error,
  errorMsg,
  inputRef,
  clearTreshold,
  ...rest
}) => {
  const labelProps = {
    label,
    info,
    tooltip
  }

  const fixheight = rows * sizes[size].lineHeight + sizes[size].paddingVertical * 2

  const textareaProps = {
    onChange,
    disabled,
    readOnly,
    placeholder,
    fixheight,
    ...rest
  }

  if (value || value === '') {
    textareaProps['value'] = value
  }

  return (
    <div>
      <InputLabel {...labelProps} />
      <Wrapper size={size} disabled={disabled} readOnly={readOnly} error={error}>
        <PerfectScrollbar>
          <TextareaWrapper autoResize={autoResize} fixheight={fixheight}>
            <StyledTextareaAuto {...textareaProps} />
            {clear && (
              <StyledInputControl clear={clear} onClear={onClear} clearTreshold={clearTreshold} value={value} />
            )}
          </TextareaWrapper>
        </PerfectScrollbar>
      </Wrapper>
      {error && (
        <Error>
          <Spacer space={theme.spacings.xs4} />
          {errorMsg}
        </Error>
      )}
    </div>
  )
}

const StyledTextareaAuto = styled(TextareaAuto)`
  width: 100%;
  box-sizing: border-box;
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  font-size: 16px;
  line-height: ${({ size }) => (size === 'lg' ? '24px' : '20px')};
  border: none;
  resize: none;
  outline: none;
  position: relative;
  opacity: ${({ disabled, readOnly }) => (disabled ? '0.8' : readOnly ? '1' : '1')};
  background: ${({ readOnly }) => (readOnly ? theme.colors.gray.g700 : 'transparent')};
  overflow: hidden;
  min-height: ${({ fixheight }) => fixheight}px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 2px solid ${theme.colors.gray.g500};
  border-color: ${({ disabled, readOnly, error }) =>
    disabled || readOnly ? theme.colors.gray.g700 : error ? theme.colors.orange.primary : theme.colors.gray.g400};
  border-radius: 8px;
  transition: all ${theme.transitions.basic};
  padding: ${({ size }) => (size === 'lg' ? '12px 18px' : '10px 14px')};
  padding-right: 0;
  position: relative;
  background-color: ${({ disabled, readOnly }) => (disabled || readOnly ? theme.colors.gray.g700 : theme.colors.white)};
  transform: translate3d(0, 0, 0); /* this is to contain position fixed */

  &:hover {
    border-color: ${({ disabled, error, readOnly }) =>
      error ? theme.colors.orange.hover : disabled || readOnly ? theme.colors.gray.g700 : theme.colors.gray.g300};
  }

  &:focus,
  &:focus-within,
  &:active {
    border-color: ${({ error, disabled, readOnly }) =>
      error ? theme.colors.orange.primary : disabled || readOnly ? theme.colors.gray.g700 : theme.colors.gray.primary};
  }
`

const TextareaWrapper = styled.div`
  display: flex;
  max-height: ${({ fixheight, autoResize }) => !autoResize && `${fixheight}px`};
  padding-right: ${theme.spacings.s}px;
`
const Error = styled(Text)`
  color: ${theme.colors.orange.primary};
`
const StyledInputControl = styled(InputControl)`
  div:first-of-type {
    position: fixed;
    top: ${theme.spacings.xs}px;
    right: ${theme.spacings.xs}px;
  }
`

TextArea.propTypes = {
  clear: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md']),
  value: PropTypes.string,
  onClear: PropTypes.func,
  autoResize: PropTypes.bool,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  label: PropTypes.string,
  info: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  clearTreshold: PropTypes.number
}
