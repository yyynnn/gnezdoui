/* eslint-disable no-magic-numbers */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Input } from '../Input'

import { theme } from 'theme'

export const MoneyInput = ({ onChange, placeholder, currency = 'RUB', onClick, children, ...rest }) => {
  const [focus, setFocus] = useState(false)

  const currencySymbol = Number()
    .toLocaleString(0, { style: 'currency', currency: currency, currencyDisplay: 'symbol' })
    .substr(-1)

  const numberMask = createNumberMask({
    prefix: '',
    suffix: ` ${currencySymbol}`,
    thousandsSeparatorSymbol: ' '
  })
  const focusHandler = e => {
    setFocus(true)
  }
  const blurHandler = e => {
    setFocus(false)
  }
  const setCaret = e => {
    const input = e.target
    if (input.selectionStart > input.value.length - 2) {
      input.setSelectionRange(input.value.length - 2, input.value.length - 2)
    }
  }
  const newPlaceholder = focus ? currencySymbol : placeholder
  return (
    <Wrapper focus={focus}>
      <Input
        placeholder={newPlaceholder}
        onFocus={focusHandler}
        onBlur={blurHandler}
        radix="."
        guide={true}
        mask={numberMask}
        onChange={onChange}
        onClick={e => {
          setCaret(e)
          onClick && onClick(e)
        }}
        {...rest}
      >
        {children}
      </Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input:focus::placeholder {
    color: ${theme.colors.black};
  }
`

MoneyInput.propTypes = {
  currency: PropTypes.string
}
