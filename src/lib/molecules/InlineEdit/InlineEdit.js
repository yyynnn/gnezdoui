/* eslint-disable no-magic-numbers */

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'theme'
import { Icon } from 'lib/atoms/Icon'
import { Heading } from 'lib/atoms/Heading'
import { Spacer } from 'lib/atoms/Spacer'

export const InlineEdit = ({
  className,
  defaultText,
  autoFocus,
  inputMaxLength,
  onFocus,
  onFocusOut,
  placeholder,
  ...rest
}) => {
  const baseEditColor = theme.colors.gray.g300
  const [fill, setFill] = useState(baseEditColor)
  const [text, setText] = useState(defaultText || '')
  const [isEditing, setIsEditing] = useState(false)
  let textInput = ''

  const handleFocus = text => {
    if (isEditing) {
      if (typeof onFocusOut === 'function') {
        onFocusOut(text)
      }
    } else {
      if (typeof onFocus === 'function') {
        onFocus(text)
      }
    }
    setIsEditing(!isEditing)
    return onFocus(text)
  }

  const handleChange = () => {
    setText(textInput.value)
  }

  return (
    <Wrapper
      onMouseOver={() => setFill(theme.colors.gray.secondary)}
      onMouseLeave={() => setFill(baseEditColor)}
      data-testid="inlineEdit"
    >
      <Heading>
        {isEditing ? (
          <input
            type="text"
            className={className}
            ref={input => {
              textInput = input
            }}
            value={text}
            onChange={handleChange}
            onBlur={handleFocus}
            maxLength={inputMaxLength}
            placeholder={placeholder}
            autoFocus
            contentEditable
          />
        ) : (
          <InnerWrapper>
            <label className={className} onClick={handleFocus}>
              {text}
            </label>
            <Spacer space={12} />
            <Icon type="edit" fill={fill} />
          </InnerWrapper>
        )}
      </Heading>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    border: none;
  }

  [contenteditable]::selection {
    background: ${theme.colors.red.primary};
  }
`

const InnerWrapper = styled.div`
  display: flex;
`

InlineEdit.propTypes = {
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultText: PropTypes.string,
  inputMaxLength: PropTypes.number,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
}
