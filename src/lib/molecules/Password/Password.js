import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Input } from '../Input'
import { InputControl } from '../Input/atoms/InputControl'

import { theme } from 'theme'

export const Password = ({ children, ...rest }) => {
  const [type, toggleType] = useState('password')
  const inputRef = useRef(null)
  const passHandler = () => {
    const newType = type === 'password' ? 'text' : 'password'
    toggleType(newType)
  }
  return (
    <Wrapper type={type}>
      <Input type={type} inputRef={inputRef} {...rest}>
        <InputControl pass={true} isVisible={type === 'text'} onPassShow={passHandler} />
        {children}
      </Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    letter-spacing: ${({ type }) => (type === 'password' ? '4px' : 'normal')};
    transition: letter-spacing 0s;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px ${theme.colors.yellow.autofill} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input::placeholder {
    letter-spacing: normal;
  }
`

Password.propTypes = {}
