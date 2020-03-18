/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text/Text'

import { Icon } from './../Icon/Icon'

import { theme, hoverRatio, darken, activeRatio } from 'theme'

export const Button = ({
  children,
  type = 'primary',
  size = 'lg',
  dropdown = false,
  disabled = false,
  fluid = false,
  rounded = false,
  ...rest
}) => {
  return (
    <Wrapper
      disabled={disabled}
      type={type}
      bgcolor={
        type === 'outline' || type === 'ghost'
          ? theme.colors.white
          : type === 'secondary'
          ? theme.colors.gray.g500
          : theme.colors.red.primary
      }
      color={
        disabled
          ? theme.colors.gray.g400
          : type === 'secondary' || type === 'outline' || type === 'ghost'
          ? theme.colors.gray.primary
          : theme.colors.white
      }
      size={size}
      fluid={fluid}
      dropdown={dropdown}
      {...rest}
      data-testid="button"
      rounded={rounded}
    >
      <StyledText size={size} bold>
        {children}
        {dropdown && <StyledDropdownIcon type="arrow_down" />}
      </StyledText>
    </Wrapper>
  )
}

const StyledDropdownIcon = styled(Icon)`
  margin-left: 8px;
  margin-right: 0px;
`

const StyledText = styled(Text)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.button`
  display: flex;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  width: ${({ fluid }) => (fluid ? '100%' : 'initial')};
  padding: ${({ size }) => (size === 'lg' ? '14px' : size === 'md' ? '10px' : '8px')};
  border-radius: ${({ rounded }) => (rounded ? theme.radiuses.round : theme.radiuses.basic)}px;
  color: ${({ color }) => color};
  background-color: ${({ bgcolor, disabled }) => (disabled ? theme.colors.gray.g600 : bgcolor)};
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ bgcolor, disabled, type }) =>
    disabled
      ? theme.colors.gray.g600
      : type === 'outline'
      ? theme.colors.gray.g600
      : type === 'ghost'
      ? theme.colors.transparent
      : bgcolor};
  transition: ${theme.transitions.basic};

  & ${StyledText} {
    line-height: initial;
  }

  & i {
    margin-right: ${({ dropdown }) => !dropdown && '8px'};
  }

  & i:only-child {
    margin-right: 0;
  }

  &:focus {
    border: 2px solid ${theme.colors.gray.g300};
  }

  &:hover {
    background-color: ${({ bgcolor, disabled }) =>
      disabled ? theme.colors.gray.g600 : darken(theme.colors.red.primary, hoverRatio)};
    border: 2px solid
      ${({ bgcolor, disabled }) => (disabled ? theme.colors.gray.g600 : darken(theme.colors.red.primary, hoverRatio))};
    color: ${({ disabled, color }) => (disabled ? color : theme.colors.white)};
    & svg {
      fill: ${({ type, disabled }) => (disabled ? theme.colors.gray.g400 : theme.colors.white)};
      stroke: ${({ type, disabled }) => (disabled ? theme.colors.gray.g400 : theme.colors.white)};
      ${({ size }) => (size === 'sm' ? 'width: 12px;height: 12px;' : '')}
    }
  }

  &:active {
    background-color: ${({ bgcolor, disabled }) =>
      disabled ? theme.colors.gray.g600 : darken(theme.colors.red.primary, activeRatio)};
    border: 2px solid
      ${({ bgcolor, disabled }) => (disabled ? theme.colors.gray.g600 : darken(theme.colors.red.primary, activeRatio))};
    color: ${({ disabled, color }) => (disabled ? color : theme.colors.white)};
    & svg {
      fill: ${({ type, disabled }) => (disabled ? theme.colors.gray.g400 : theme.colors.white)};
      stroke: ${({ type, disabled }) => (disabled ? theme.colors.gray.g400 : theme.colors.white)};
      ${({ size }) => (size === 'sm' ? 'width: 12px;height: 12px;' : '')}
    }
  }

  & circle {
    stroke-opacity: 0.5;
  }

  & svg {
    fill: ${({ type, disabled }) =>
      disabled
        ? theme.colors.gray.g400
        : type === 'secondary' || type === 'outline' || type === 'ghost'
        ? theme.colors.gray.primary
        : theme.colors.white};
    stroke: ${({ type, disabled }) =>
      disabled
        ? theme.colors.gray.g400
        : type === 'secondary' || type === 'outline' || type === 'ghost'
        ? theme.colors.gray.primary
        : theme.colors.white};
    ${({ size }) => (size === 'sm' ? 'width: 12px;height: 12px;' : '')}
  }
`

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  dropdown: PropTypes.bool,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool
}
