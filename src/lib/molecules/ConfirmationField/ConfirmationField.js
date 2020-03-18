/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactCodeInput from 'react-verification-code-input'

import { Text, Link, Spacer } from 'lib'
import { theme } from 'theme'

export const ConfirmationField = ({
  topText,
  className,
  fields,
  autoFocus,
  fieldWidth,
  fieldHeight,
  type,
  timerDuration,
  onComplete,
  onChange,
  onChangePhoneClick,
  onSendCodeClick,
  ...rest
}) => {
  const [seconds, setSeconds] = useState(timerDuration)
  const [isActive, setIsActive] = useState(true)
  const [errText, setErrText] = useState('')
  const Timer = () => {
    useEffect(() => {
      let interval = null
      if (seconds !== 0) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1)
        }, 1000)
      } else {
        setIsActive(false)
      }
      return () => clearInterval(interval)
    })
    const totalDuration = `00:${seconds < 10 ? `0${seconds}` : seconds}`
    return isActive ? (
      <StyledSpan>Повторно отправим код через {totalDuration}</StyledSpan>
    ) : (
      <Link
        onClick={() => {
          setIsActive(true)
          setSeconds(timerDuration)
          return onSendCodeClick()
        }}
      >
        Выслать код повторно
      </Link>
    )
  }

  return (
    <div data-testid="confField">
      <StyledText bold={true}>{topText}</StyledText>
      <StyledReactCodeInput
        className={className}
        fields={fields}
        autoFocus={autoFocus}
        type={type}
        fieldWidth={fieldWidth}
        fieldHeight={fieldHeight}
        onComplete={res => {
          const showErr = text => {
            setErrText(text)
          }
          onComplete(res, showErr)
        }}
        onChange={res => {
          res.toString().split('').length < fields ? setErrText('') : false
          onChange(res)
        }}
        errText={errText}
      />
      {errText.length ? (
        <ErrText>
          <Spacer space={8} />
          {errText}
        </ErrText>
      ) : (
        false
      )}

      <Spacer space={16} />
      <Text>{Timer()}</Text>
      <Spacer space={8} />
      <Link
        onClick={() => {
          return onChangePhoneClick()
        }}
      >
        <Text>Изменить номер телефона</Text>
      </Link>
    </div>
  )
}

const StyledReactCodeInput = styled(ReactCodeInput)`
  width: 100% !important;

  & div input {
    border: 0;
    border-bottom: 2px solid ${({ errText }) => (errText.length ? theme.colors.orange.primary : theme.colors.gray.g400)};
    margin: 0 8px;
    color: ${theme.colors.gray.primary};
    font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  }

  & div input:first-child {
    border-radius: 0;
    margin-left: 0;
  }

  & div input:focus {
    border: 0;
    border-bottom: 2px solid ${theme.colors.gray.secondary};
    caret-color: ${theme.colors.gray.secondary};
  }

  & div input:last-child {
    border-right: 0;
    border-radius: 0;
    margin-right: 0;
  }
`

const StyledSpan = styled.span`
  color: ${theme.colors.gray.secondary};
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.primary};
`

const ErrText = styled(Text)`
  color: ${theme.colors.orange.primary};
`

ConfirmationField.propTypes = {
  topText: PropTypes.string,
  className: PropTypes.string,
  fields: PropTypes.number,
  autoFocus: PropTypes.bool,
  fieldWidth: PropTypes.number,
  fieldHeight: PropTypes.number,
  type: PropTypes.string,
  timerDuration: PropTypes.number,
  onComplete: PropTypes.func,
  onChange: PropTypes.func,
  onChangePhoneClick: PropTypes.func,
  onSendCodeClick: PropTypes.func
}
