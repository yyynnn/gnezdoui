import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Input } from '../Input'
import { Icon } from '../../atoms/Icon'

import { theme } from 'theme'

export const CardInput = ({ size = 'lg', children, ...rest }) => {
  const mask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
  return (
    <Wrapper>
      <Input size={size} guide={false} type="tel" mask={mask} {...rest}>
        <CardIcon size={size} type="card" />
        {children}
      </Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    text-indent: 44px;
  }
`

const CardIcon = styled(Icon)`
  outline: none;
  appearance: none;
  background: none;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  justify-content: flex-start;
  padding-left: ${({ size }) => (size === 'lg' ? theme.spacings.xs2 : theme.spacings.xs3)}px;
  top: 0;
  /* //padding: 0px 12px; */
  pointer-events: none;
`
CardInput.propTypes = {}
