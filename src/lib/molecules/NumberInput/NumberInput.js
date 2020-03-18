import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Input } from '../Input'
import { Icon } from '../../atoms/Icon/'
import { Spacer } from '../../atoms/Spacer/'

import { theme } from 'theme'

const preferableMax = 9999

export const NumberInput = ({
  size = 'lg',
  value,
  initialValue,
  increment = 1,
  min = 0,
  max = preferableMax,
  children,
  onChange,
  disabled,
  ...rest
}) => {
  const [state, setState] = useState(value || min)
  const mask = [...new Array(max.toString().length)].map(_ => {
    return /\d/
  })

  const handleNumber = (e, action) => {
    e && e.preventDefault()
    let newValue
    if (action) {
      newValue = action === 'incr' ? state + 1 : state - 1
    } else {
      newValue = parseInt(e.target.value) > max ? max : parseInt(e.target.value) < min ? min : e.target.value
    }
    setState(newValue)
    onChange && onChange(newValue)
  }

  const activeHandles = disabled ? [false, false] : [state < max, state > min]

  return (
    <WrapperNumber>
      <Input disabled={disabled} mask={mask} guide={false} size={size} value={state} onChange={handleNumber} {...rest}>
        <NumButtonsWrapper size={size}>
          <IconWrapper active={activeHandles[0]}>
            <div>
              <Icon type={'arrow_up_x16'} onMouseDown={e => activeHandles[0] && handleNumber(e, 'incr')} />
            </div>
          </IconWrapper>
          <IconWrapper active={activeHandles[1]}>
            <div>
              <Icon type={'arrow_down_x16'} onMouseDown={e => activeHandles[1] && handleNumber(e, 'decr')} />
            </div>
          </IconWrapper>
          <Spacer space={theme.spacings.xs4} samespace />
        </NumButtonsWrapper>
      </Input>
    </WrapperNumber>
  )
}

const IconWrapper = styled.div`
  cursor: ${({ active }) => (active ? 'pointer' : 'auto')};

  svg {
    fill: ${({ active }) => (active ? theme.colors.gray.g300 : theme.colors.gray.g400)};
  }

  :hover {
    svg {
      fill: ${({ active }) => (active ? theme.colors.gray.primary : theme.colors.gray.g400)};
      transition: all ${theme.transitions.basic};
    }
  }
`

const NumButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ size }) => (size === 'lg' ? theme.spacings.xs3 : theme.spacings.xs4)}px;
  height: 100%;
  right: ${({ size }) => (size === 'lg' ? theme.spacings.xs2 : theme.spacings.xs3)}px;
`
const WrapperNumber = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
  outline: none;
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: transparent;
    transition: all ${theme.transitions.basic};
  }

  input:focus::placeholder {
    color: ${theme.colors.gray.g300};
  }
`

NumberInput.propTypes = {
  increment: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  initialValue: PropTypes.number
}
