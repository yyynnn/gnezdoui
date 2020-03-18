/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text/Text'

import { theme } from 'theme'

const SECONDARY_TYPE = 'secondary'
const max = 99
const sizeMapping = {
  lg: {
    minWidth: theme.sizes.lesser.lg,
    minHeight: theme.sizes.lesser.lg,
    padding: theme.spacings.xs2
  },
  md: {
    minWidth: theme.sizes.lesser.md,
    minHeight: theme.sizes.lesser.md,
    padding: theme.spacings.xs3
  },
  sm: {
    minWidth: theme.sizes.lesser.sm,
    minHeight: theme.sizes.lesser.sm,
    padding: theme.spacings.xs4
  }
}
const minWidth = ({ size }) => (sizeMapping[size] ? sizeMapping[size].minWidth : sizeMapping['lg'].minWidth)
const minHeight = ({ size }) => (sizeMapping[size] ? sizeMapping[size].minHeight : sizeMapping['lg'].minHeight)
const paddingLeft = ({ size }) => (sizeMapping[size] ? sizeMapping[size].padding : sizeMapping['lg'].padding)
const isPrimary = type => !(type && type === SECONDARY_TYPE)

export const Badge = ({ outline, type, size, value, text = '', dynamic, ...rest }) => {
  const Wrapper = dynamic ? DynamicWrapper : StaticWrapper
  const formattedValue = value > max ? '99+' : value
  return (
    <Wrapper outline={outline} type={type} size={size} dynamic={dynamic} {...rest} data-testid="badge">
      <StyledText outline={outline} type={type} size={size === 'lg' ? 'md' : size} reset={true}>
        {text && formattedValue ? `${formattedValue} ${text}` : text ? `${text}` : `${formattedValue}`}
      </StyledText>
    </Wrapper>
  )
}

const StyledText = styled(Text)`
  color: ${({ type, outline }) =>
    outline ? theme.colors.gray.primary : isPrimary(type) ? theme.colors.white : theme.colors.gray.primary};
`

const StaticWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${minWidth}px;
  min-height: ${minHeight}px;
  padding: 0 ${paddingLeft}px;
  background-color: ${({ type, outline }) =>
    outline ? theme.colors.white : isPrimary(type) ? theme.colors.red.primary : theme.colors.gray.g700};
  border-radius: ${theme.radiuses.round}px;
  border: ${({ outline }) => outline && '2px solid'};
  border-color: ${({ outline }) => outline && theme.colors.gray.g500};
  transition: ${theme.transitions.basic};
  cursor: default;
  white-space: nowrap;
`
const DynamicWrapper = styled(StaticWrapper)`
  cursor: pointer;

  &:hover {
    background-color: ${({ type, outline }) =>
      outline ? theme.colors.gray.g700 : isPrimary(type) ? theme.colors.red.hover : theme.colors.gray.g600};
    border-color: ${({ outline }) => outline && theme.colors.gray.g400};
  }

  &:active {
    background-color: ${({ type, outline }) =>
      outline ? theme.colors.gray.g600 : isPrimary(type) ? theme.colors.red.active : theme.colors.gray.g500};
    border-color: ${({ outline }) => outline && theme.colors.gray.g300};
  }
`

Badge.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  dynamic: PropTypes.bool,
  outline: PropTypes.bool
}
