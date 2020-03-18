/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'theme'
import { Text } from 'src/lib/atoms/Text/Text'
import { Icon } from 'src/lib/atoms/Icon/Icon'
import { Spacer } from 'src/lib/atoms/Spacer/Spacer'
import { Color } from 'src/lib/atoms/Color'

export const dimension = {
  md: {
    checkbox: 28,
    arrow: 'check',
    text: 'lg',
    hint: 'md',
    hintMargin: 40,
    indeterminateWidth: 14,
    indicator: {
      long: 12,
      short: 8
    }
  },
  sm: {
    checkbox: 20,
    arrow: 'check',
    text: 'md',
    hint: 'sm',
    hintMargin: 32,
    indeterminateWidth: 10,
    indicator: {
      long: 10,
      short: 7
    }
  }
}

export const Checkbox = ({
  disabled,
  error,
  errorMessage,
  isChecked,
  indeterminate,
  children,
  size = 'md',
  name,
  onChange,
  hint,
  noInput = false,
  outline,
  ...rest
}) => {
  return (
    <CheckboxWrapper data-testid="checkbox" {...rest}>
      <ActiveField>
        {errorMessage ? (
          <React.Fragment>
            <ErrorText size={dimension[size].text}>{errorMessage}</ErrorText>
            {size === 'md' ? (
              <Spacer space={theme.spacings.xs2} />
            ) : size === 'sm' ? (
              <Spacer space={theme.spacings.xs3} />
            ) : null}
          </React.Fragment>
        ) : null}
        <CheckboxLabel disabled={disabled}>
          {!noInput && (
            <CheckboxInput
              type="checkbox"
              name={name || 'defaultName'}
              id={name || 'defaultId'}
              checked={isChecked}
              onChange={onChange}
              disabled={disabled}
            />
          )}
          <CheckboxIndicatorWrapper
            checked={isChecked}
            size={size}
            onChange={onChange}
            disabled={disabled}
            error={error}
          >
            {indeterminate ? (
              <Indeterminate length={dimension[size].indeterminateWidth} disabled={disabled} />
            ) : isChecked ? (
              <Icon fill={theme.colors.white} type={dimension[size].arrow} />
            ) : null}
          </CheckboxIndicatorWrapper>
          <CheckboxChildWrapper>
            <Color color={disabled ? theme.colors.gray.g300 : theme.colors.gray.primary}>
              <Text size={dimension[size].text}>{children}</Text>
              {hint ? (
                <HintText hintMargin={size} size={dimension[size].hint}>
                  {hint}
                </HintText>
              ) : null}
            </Color>
          </CheckboxChildWrapper>
        </CheckboxLabel>
      </ActiveField>
      <Cap />
    </CheckboxWrapper>
  )
}

const CheckboxChildWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const HintText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`

const ErrorText = styled(Text)`
  color: ${theme.colors.orange.primary};
`

const CheckboxLabel = styled.label`
  display: flex;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
`
const ActiveField = styled.div`
  width: 100%;
`

const Cap = styled.div`
  margin: auto;
`

const CheckboxWrapper = styled.div`
  display: flex;
`

const CheckboxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
`

const CheckboxIndicatorWrapper = styled.div`
  position: relative;
  user-select: none;
  border: ${theme.borders.basic};
  background-color: ${({ checked, disabled }) =>
    disabled ? theme.colors.gray.g600 : checked ? theme.colors.red.primary : theme.colors.white};
  border-color: ${({ checked, disabled, error }) =>
    disabled
      ? theme.colors.gray.g600
      : error
      ? theme.colors.orange.primary
      : checked
      ? theme.colors.red.primary
      : theme.colors.gray.g400};
  border-radius: ${theme.radiuses.basic}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => dimension[size].checkbox}px;
  height: ${({ size }) => dimension[size].checkbox}px;
  min-width: ${({ size }) => dimension[size].checkbox}px;
  transition: ${theme.transitions.basic};
  pointer-events: all;
  margin-right: 16px;

  & a {
    pointer-events: all;
    color: ${theme.colors.turquoiseblue};
    transition: ${theme.transitions.basic};
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ checked, disabled }) =>
      disabled ? theme.colors.gray.g600 : checked ? theme.colors.red.hover : theme.colors.gray.g700};
    border-color: ${({ checked, disabled, error }) =>
      disabled
        ? theme.colors.gray.g600
        : error
        ? theme.colors.orange.primary
        : checked
        ? theme.colors.red.hover
        : theme.colors.gray.g300};
  }

  &:active {
    background-color: ${({ checked, disabled }) =>
      disabled ? theme.colors.gray.g600 : checked ? theme.colors.red.active : theme.colors.gray.g600};
    border-color: ${({ checked, disabled, error }) =>
      disabled
        ? theme.colors.gray.g600
        : error
        ? theme.colors.orange.primary
        : checked
        ? theme.colors.red.active
        : theme.colors.gray.secondary};
  }

  ${CheckboxInput}:focus + & {
    background-color: ${({ checked }) => (checked ? theme.colors.red.hover : theme.colors.white)};
    border-color: ${({ checked, error }) =>
      error ? theme.colors.orange.primary : checked ? theme.colors.red.hover : theme.colors.gray.secondary};
    box-shadow: 0 0 0 2px ${theme.colors.gray.g300};
  }
`

const Indeterminate = styled.div`
  width: ${({ length }) => length}px;
  height: 2px;
  background-color: ${({ disabled }) => (disabled ? theme.colors.gray.g300 : theme.colors.white)};
`

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  isChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  children: PropTypes.any,
  size: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  hint: PropTypes.string
}
