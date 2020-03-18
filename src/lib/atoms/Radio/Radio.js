/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Spacer } from '../Spacer/Spacer'

import { theme } from 'theme'
import { Text } from 'src/lib/atoms/Text/Text'

export const dimension = {
  lg: {
    radioSize: 32,
    border: 11,
    text: 'lg',
    hint: 'md',
    hintMargin: 40
  },
  md: {
    radioSize: 24,
    border: 8,
    text: 'lg',
    hint: 'md',
    hintMargin: 40
  },
  sm: {
    radioSize: 16,
    border: 5,
    text: 'md',
    hint: 'sm',
    hintMargin: 32
  }
}

const radioColorState = {
  checkedDefault: {
    borderColor: theme.colors.red.primary,
    backgroundColor: theme.colors.white
  },
  checkedHover: {
    borderColor: theme.colors.red.activehover,
    backgroundColor: theme.colors.white
  },
  checkedActive: {
    borderColor: theme.colors.red.active,
    backgroundColor: theme.colors.white
  },
  checkedDisabled: {
    borderColor: theme.colors.gray.g700,
    backgroundColor: theme.colors.gray.g500
  },
  uncheckedDefault: {
    borderColor: theme.colors.gray.g500,
    backgroundColor: theme.colors.white
  },
  uncheckedHover: {
    borderColor: theme.colors.gray.g400,
    backgroundColor: theme.colors.gray.g700
  },
  uncheckedActive: {
    borderColor: theme.colors.gray.g300,
    backgroundColor: theme.colors.gray.g600
  },
  uncheckedDisabled: {
    borderColor: theme.colors.gray.g700,
    backgroundColor: theme.colors.gray.g700
  },
  error: {
    borderColor: theme.colors.orange.primary,
    backgroundColor: theme.colors.white
  }
}

const selectState = ({ disabled, checked, error }, elementState = 'regular') => {
  switch (elementState) {
    case 'regular': {
      if (error) {
        return radioColorState.error
      } else if (checked && disabled) {
        return radioColorState.checkedDisabled
      } else if (!checked && disabled) {
        return radioColorState.uncheckedDisabled
      } else if (checked && !disabled) {
        return radioColorState.checkedDefault
      } else {
        return radioColorState.uncheckedDefault
      }
    }
    case 'active': {
      if (checked && !disabled) {
        return radioColorState.checkedActive
      } else if (checked && disabled) {
        return radioColorState.checkedDisabled
      } else if (!checked && !disabled) {
        return radioColorState.uncheckedActive
      } else {
        return radioColorState.uncheckedDisabled
      }
    }
    case 'hover': {
      if (checked && !disabled) {
        return radioColorState.checkedHover
      } else if (checked && disabled) {
        return radioColorState.checkedDisabled
      } else if (!checked && !disabled) {
        return radioColorState.uncheckedHover
      } else if (!checked && disabled) {
        return radioColorState.uncheckedDisabled
      }
    }
  }
}

const selectRadioBackgroundColor = (props, elementState) => selectState(props, elementState).backgroundColor
const selectRadioBorderColor = (props, elementState) => selectState(props, elementState).borderColor

export const Radio = ({
  size = 'md',
  disabled,
  children,
  hint,
  error,
  errorMessage,
  id,
  name,
  isChecked,
  radioHandler = () => {}
}) => {
  return (
    <RadioWrapper data-testid="radio">
      <ActiveField>
        <RadioLabel disabled={disabled}>
          <RadioInput
            type="radio"
            id={id || name}
            name={name || id}
            checked={isChecked}
            onChange={radioHandler}
            disabled={disabled}
          />
          <RadioIndicatorWrapper
            checked={isChecked}
            size={size}
            onChange={radioHandler}
            disabled={disabled}
            error={error}
          />
          <RadioChildWrapper>
            <Text size={dimension[size].text}>{children}</Text>
            {hint ? (
              <HintText hintMargin={size} size={dimension[size].hint}>
                {hint}
              </HintText>
            ) : null}
          </RadioChildWrapper>
        </RadioLabel>
        {errorMessage ? (
          <React.Fragment>
            {size === 'md' ? (
              <Spacer space={theme.spacings.xs2} />
            ) : size === 'sm' ? (
              <Spacer space={theme.spacings.xs3} />
            ) : null}{' '}
            <ErrorText size={dimension[size].text}>{errorMessage}</ErrorText>
          </React.Fragment>
        ) : null}
      </ActiveField>
      <Cap />
    </RadioWrapper>
  )
}

const RadioChildWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & a {
    pointer-events: all;
    color: ${theme.colors.blue.primary};
    transition: ${theme.transitions.basic};
    text-decoration: none;
  }
`
const HintText = styled(Text)`
  color: ${theme.colors.gray.g400};
`

const ErrorText = styled(Text)`
  color: ${theme.colors.orange.primary};
`

const RadioLabel = styled.label`
  display: flex;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
`

const ActiveField = styled.div``

const Cap = styled.div`
  margin: auto;
`

const RadioWrapper = styled.div`
  display: flex;
  & * {
    box-sizing: border-box;
  }
`

const RadioInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
`

const RadioIndicatorWrapper = styled.div`
  position: relative;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.transitions.basic};
  pointer-events: all;
  margin-right: 16px;
  width: ${({ size }) => dimension[size].radioSize}px;
  height: ${({ size }) => dimension[size].radioSize}px;
  max-width: ${({ size }) => dimension[size].radioSize}px;
  max-height: ${({ size }) => dimension[size].radioSize}px;
  border: ${theme.borders.basic};
  border-radius: 50%;
  background-color: ${selectRadioBackgroundColor};
  border-color: ${selectRadioBorderColor};
  border-width: ${({ checked, size }) => (checked ? dimension[size].border : '2')}px;

  &:hover {
    border-color: ${props => selectRadioBorderColor(props, 'hover')};
    background-color: ${props => selectRadioBackgroundColor(props, 'hover')};
  }

  &:active {
    border-color: ${props => selectRadioBorderColor(props, 'active')};
    background-color: ${props => selectRadioBackgroundColor(props, 'active')};
  }
`

Radio.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  hint: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  radioHandler: PropTypes.func
}
