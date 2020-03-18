/* eslint-disable no-magic-numbers */
/* stylelint-disable plugin/8-point-grid */
/* stylelint-disable rule-empty-line-before */

import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Input } from '../Input'
import { Text } from '../../atoms/Text'
import { Slider } from '../../atoms/Slider'

import { theme } from 'theme'

const clean = (str, source) => {
  let count = 0
  str
    .split('')
    .reverse()
    .forEach(item => {
      !item.match(/^[0-9 ]+$/) && count++
    })
  return Number(
    str
      .slice(0, str.length - count)
      .split(' ')
      .join('')
  )
}

export const SliderInput = ({
  label,
  info,
  tooltip,
  disabled,
  size = 'lg',
  type = 'currency',
  currency = 'RUB',
  period = 'years',
  step = 1,
  min = 1,
  max = 100,
  percent,
  isRange = false,
  handleDistance = 10,
  onChange,
  value,
  children,
  readOnly,
  marks,
  borders,
  className,
  ...rest
}) => {
  const [state, setState] = useState(value || min)
  const [inputValue, inputHandler] = useState(state)
  const [rangeInput, setRangeInput] = useState(value || [min, max])
  const [rangeState, setRangeState] = useState(value || [min, max])
  const suffixes = {
    years: ['год', 'года', 'лет'],
    months: ['месяц', 'месяца', 'месяцев'],
    days: ['день', 'дня', 'дней']
  }
  const sliderProps = {
    borders,
    borderType: type,
    period,
    marks,
    disabled: disabled || readOnly,
    min,
    max,
    step,
    handleDistance,
    isRange,
    size
  }
  const inputProps = {
    label,
    info,
    tooltip,
    disabled,
    size,
    readOnly
  }
  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
  }

  const getSuffix = _value => {
    const value = typeof _value !== 'number' ? clean(_value, 'from get suffix') : _value
    return type === 'currency'
      ? Number()
          .toLocaleString(0, { style: 'currency', currency: currency, currencyDisplay: 'symbol' })
          .substr(-1)
      : declOfNum(value, suffixes[period])
  }

  const getMask = value => {
    return createNumberMask({
      prefix: '',
      suffix: ` ${getSuffix(value)}`,
      thousandsSeparatorSymbol: ' '
    })
  }

  const handler = (value, source, e) => {
    const _value = typeof value !== 'number' && clean(value, 'from usual handler')
    let output
    if (source === 'slider') {
      output = value
      setState(value)
    }
    if (source === 'input') {
      if (_value > max) {
        output = max
        setState(max)
        inputHandler(max)
      } else if (_value < min) {
        output = min
        setState(min)
      } else {
        output = max
        setState(_value)
      }
    }
    inputHandler(value)
    onChange && onChange(output)
  }

  const handleRange = (value, source) => {
    let output
    if (source === 'slider') {
      output = value
      setRangeState(value)
      setRangeInput(value)
    }
    if (source === 'input-left') {
      const _value = clean(value)
      if (_value >= min && _value <= max) {
        output = [_value, rangeState[1]]
        setRangeState(output)
        setRangeInput(output)
      }
    }
    if (source === 'input-right') {
      const _value = clean(value)
      if (_value >= min && _value <= max) {
        output = [rangeState[0], _value]
        setRangeState([rangeState[0], _value])
        setRangeInput([rangeInput[0], _value])
      }
    }
    output && onChange && onChange(output)
  }

  const handleBlur = e => {
    const value = clean(e.target.value)
    value < min ? handler(min, 'slider') : value > max ? handler(max, 'slider') : null
  }

  const handleRangeBlur = (e, source) => {
    const value = clean(e.target.value)
    if (source === 'left') {
      const minLeft = rangeState[1] - handleDistance * step
      value > minLeft && handleRange([minLeft, rangeState[1]], 'slider')
      value < min && handleRange([min, rangeState[1]], 'slider')
    } else {
      const minRight = rangeState[0] + handleDistance * step
      value > max && handleRange([rangeState[0], max], 'slider')
      value < minRight && handleRange([rangeState[0], minRight], 'slider')
    }
  }

  return (
    <WrapperSlider className={className} size={size}>
      {!isRange ? (
        <React.Fragment>
          <Input
            {...inputProps}
            mask={getMask(inputValue)}
            value={typeof inputValue === 'number' || inputValue === '' ? inputValue : clean(inputValue)}
            onChange={e => {
              handler(e.target.value, 'input')
            }}
            onBlur={handleBlur}
            {...rest}
          />
          <StyledRangeSlider {...sliderProps} value={state} onChange={value => handler(value, 'slider')} />
          {percent && (
            <Percent>
              <Text size={size}>{percent}</Text>
            </Percent>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Input
            {...inputProps}
            mask={getMask(rangeInput[0])}
            value={typeof rangeInput[0] === 'number' || rangeInput[0] === '' ? rangeInput[0] : clean(rangeInput[0])}
            value={rangeInput[0]}
            onChange={e => {
              handleRange(e.target.value, 'input-left')
            }}
            onBlur={e => handleRangeBlur(e, 'left')}
            {...rest}
          >
            <InnerInputWrapper size={size}>
              <Input
                size={size}
                readOnly={readOnly}
                disabled={disabled}
                mask={getMask(rangeInput[1])}
                value={typeof rangeInput[1] === 'number' || rangeInput[1] === '' ? rangeInput[1] : clean(rangeInput[1])}
                value={rangeInput[1]}
                onChange={e => {
                  handleRange(e.target.value, 'input-right')
                }}
                onBlur={e => handleRangeBlur(e, 'right')}
                {...rest}
              />
            </InnerInputWrapper>
          </Input>
          <StyledRangeSlider {...sliderProps} value={rangeState} onChange={value => handleRange(value, 'slider')} />
        </React.Fragment>
      )}
    </WrapperSlider>
  )
}

const InnerInputWrapper = styled.div`
  height: 0px;

  input {
    position: absolute;
    right: 0;
    width: 50%;
    text-align: right;
    padding-right: 20px;
    border: 0;
    background-color: transparent;
  }

  div {
    height: 0px;
    border: 0;
    background-color: transparent;
    top: ${({ size }) => (size === 'lg' ? '-24px' : '-20px')};
  }
`

const StyledRangeSlider = styled(Slider)`
  position: relative;
  top: -7px;
  padding-right: ${({ size }) => (size === 'lg' ? 26 : 19)}px;
  padding-left: ${({ size }) => (size === 'lg' ? 32 : 28)}px;
  z-index: 0;

  .rc-slider-rail {
    background-color: ${theme.colors.gray.g400};
    height: 2px;
    margin-right: -6px;
  }

  .rc-slider-step {
    height: 2px;
  }

  .rc-slider-track {
    height: 2px;
  }
`
const Percent = styled(Text)`
  padding: 0 16px;
  position: absolute;
  top: 14px;
  right: 0;
  color: ${theme.colors.gray.g300};
`

const WrapperSlider = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
`

SliderInput.propTypes = {
  type: PropTypes.oneOf(['currency', 'period']),
  tooltip: PropTypes.string,
  isRange: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  currency: PropTypes.string,
  period: PropTypes.oneOf(['years', 'months', 'days']),
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  percent: PropTypes.string,
  handleDistance: PropTypes.number,
  marks: PropTypes.object,
  borders: PropTypes.bool,
  label: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md'])
}
