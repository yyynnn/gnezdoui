import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from '../Icon/Icon'

import { theme } from 'theme'

export const Link = ({ children, dropdown = false, type, as, rotate, ...rest }) => {
  return as === 'div' ? (
    <LinkWrapperDiv dropdown={dropdown} {...rest} data-testid="link">
      {children}
      {dropdown && <StyledDropdownIcon type={type} rotate={rotate} />}
    </LinkWrapperDiv>
  ) : (
    <LinkWrapper dropdown={dropdown} {...rest} data-testid="link">
      {children}
      {dropdown && <StyledDropdownIcon type={type} rotate={rotate} />}
    </LinkWrapper>
  )
}

const StyledDropdownIcon = styled(Icon)`
  margin-left: 8px;
  transform: rotate(${({ rotate }) => (rotate ? rotate : '0')}deg);
`
const LinkWrapperDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.blue.primary};
  transition: all ${theme.transitions.basic};
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    color: ${theme.colors.blue.hover};
  }

  &:active {
    color: ${theme.colors.blue.active};
  }

  &:focus {
    color: ${({ dropdown }) => (dropdown ? 'default' : theme.colors.red.active)};
  }

  & svg {
    fill: ${theme.colors.blue.primary};
    stroke: transparent;
  }

  &:active svg {
    fill: ${theme.colors.blue.active};
    transform: rotate(${({ dropdown }) => (dropdown ? '180' : '0')}deg);
    transition: ${theme.transitions.basic};
  }

  &:hover svg {
    fill: ${theme.colors.blue.hover};
  }

  &:focus svg {
    fill: 'default';
  }
`

const LinkWrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colors.blue.primary};
  transition: all ${theme.transitions.basic};
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    color: ${theme.colors.blue.hover};
  }

  &:active {
    color: ${theme.colors.blue.active};
  }

  &:focus {
    color: ${({ dropdown }) => (dropdown ? 'default' : theme.colors.red.active)};
  }

  & svg {
    fill: ${theme.colors.blue.primary};
    stroke: transparent;
  }

  &:active svg {
    fill: ${theme.colors.blue.active};
    transform: rotate(${({ dropdown }) => (dropdown ? '180' : '0')}deg);
    transition: ${theme.transitions.basic};
  }

  &:hover svg {
    fill: ${theme.colors.blue.hover};
  }

  &:focus svg {
    fill: 'default';
  }
`

Link.propTypes = { dropdown: PropTypes.bool, type: PropTypes.string }
