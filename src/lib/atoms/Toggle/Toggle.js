import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { ToggleChild } from './ToggleChild'

import { theme } from 'theme'

const dimension = {
  md: {
    px: {
      switch: 18,
      top: 3,
      width: 48,
      height: 28
    },
    transition: {
      left: 23,
      right: 3
    },
    text: 'lg',
    hint: 'md'
  },
  sm: {
    switch: 12,
    px: {
      switch: 12,
      top: 2,
      width: 34,
      height: 20
    },
    transition: {
      left: 16,
      right: 2
    },
    text: 'md',
    hint: 'sm'
  }
}

export const Toggle = ({
  leftText,
  rightText,
  hint,
  checked,
  disabled,
  onChange,
  biDir,
  size = 'md',
  datatestid,
  ...rest
}) => {
  return (
    <React.Fragment>
      <ToggleWrapper {...rest}>
        {biDir && leftText ? (
          <ToggleChild biDir={biDir} firstChild={true} dimension={dimension} checked={!checked} size={size} hint={hint}>
            {leftText}
          </ToggleChild>
        ) : null}
        <SwitchWrapper tabIndex="1" biDir={biDir} disabled={disabled} checked={checked} size={size} onChange={onChange}>
          <SwitchInput disabled={disabled} type="checkbox" defaultChecked={checked} data-testid={datatestid} />
          <Switch checked={checked} disabled={disabled} size={size} biDir={biDir} />
        </SwitchWrapper>
        {rightText ? (
          <ToggleChild biDir={biDir} checked={biDir ? checked : false} dimension={dimension} size={size} hint={hint}>
            {rightText}
          </ToggleChild>
        ) : null}
      </ToggleWrapper>
    </React.Fragment>
  )
}

const SwitchInput = styled.input`
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  position: absolute;
  width: 1px;
  overflow: hidden;
`

const Switch = styled.div`
  height: ${({ size }) => dimension[size].px.switch}px;
  width: ${({ size }) => dimension[size].px.switch}px;
  border: 0px transparent;
  border-radius: ${theme.radiuses.round}px;
  top: ${({ size }) => dimension[size].px.top}px;
  left: ${({ checked, size }) => (checked ? dimension[size].transition.left : dimension[size].transition.right)}px;
  background: ${({ checked, disabled, biDir }) =>
    disabled ? theme.colors.gray.g500 : biDir || checked ? theme.colors.white : theme.colors.gray.g700};
  position: relative;
  transition: all ${theme.transitions.basic};
`

const SwitchWrapper = styled.label`
  margin-right: ${theme.spacings.xs2}px;
  width: ${({ size }) => dimension[size].px.width}px;
  height: ${({ size }) => dimension[size].px.height}px;
  border-radius: ${theme.radiuses.round}px;
  display: inline-block;
  box-sizing: border-box;
  background: ${({ disabled, checked, biDir }) =>
    disabled ? theme.colors.gray.g700 : !checked && !biDir ? theme.colors.white : theme.colors.red.primary};
  border: ${theme.borders.basic};
  border-color: ${({ checked, biDir, disabled }) =>
    disabled ? theme.colors.gray.g700 : checked || biDir ? theme.colors.red.primary : theme.colors.gray.g300};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: pointer;
  outline: none;
  transition: all ${theme.transitions.basic};

  :focus-within {
    box-shadow: 0 0 0 2px ${theme.colors.gray.g400};
    border-color: ${({ checked, biDir }) => (checked || biDir ? theme.colors.red.activehover : theme.colors.gray.g400)};
    background: ${({ checked, biDir }) => (checked || biDir ? theme.colors.red.activehover : theme.colors.gray.g700)};
  }

  :focus-within ${Switch} {
    background-color: ${({ checked, biDir }) => !checked && !biDir && theme.colors.gray.g400};
  }

  :hover {
    border-color: ${({ checked, biDir }) => (checked || biDir ? theme.colors.red.activehover : theme.colors.gray.g400)};
    background-color: ${({ checked, biDir }) =>
      checked || biDir ? theme.colors.red.activehover : theme.colors.gray.g700};
  }

  :hover ${Switch} {
    background-color: ${({ checked, biDir }) => !checked && !biDir && theme.colors.gray.g400};
  }

  :active {
    border-color: ${({ checked, biDir }) => (checked || biDir ? theme.colors.red.active : theme.colors.gray.g300)};
    background-color: ${({ checked, biDir }) => (checked || biDir ? theme.colors.red.active : theme.colors.gray.g600)};
  }

  :active ${Switch} {
    background-color: ${({ checked, biDir }) => !checked && !biDir && theme.colors.gray.g300};
  }
`
const ToggleWrapper = styled.div`
  display: flex;
`

Toggle.propTypes = {
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  biDir: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.string,
  hint: PropTypes.string
}
