/* eslint-disable react/jsx-pascal-case */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { isDate } from '../Calendar/utils'
import { Calendar } from '../Calendar/Calendar'
import { Spacer } from '../../atoms/Spacer'

import { DateInput } from './molecules/DateInput'

import { useClickOutside } from 'hooks'
import { theme } from 'theme'

const strToDate = str => {
  return typeof str === 'string' && str.length === 10 && !str.includes('_')
    ? new Date(parseInt(str.split('.')[2]), parseInt(str.split('.')[1]) - 1, parseInt(str.split('.')[0]))
    : str
}
const dateToStr = value => {
  const _date = !isDate(value) ? value : new Intl.DateTimeFormat('en-US').format(value).split('/')
  return !isDate(value) ? value : `${zeroPad(_date[1], 2)}.${zeroPad(_date[0], 2)}.${_date[2]}`
}
const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0')
}

export const DatePicker = ({ range, disabled, readOnly, date, dateStart, dateEnd, onPick, ...rest }) => {
  const [state, setState] = useState(isDate(date) ? date : null)
  const [rangeState, setRangeState] = useState(
    isDate(dateStart) ? (isDate(dateEnd) ? [dateStart, dateEnd] : [dateStart, null]) : [null, null]
  )
  const [showCal, setShowCal] = useState(false)
  const dateStr = isDate(date) ? `${dateToStr(date)}` : ''
  const dateStrRange =
    isDate(dateStart) && isDate(dateEnd)
      ? `${dateToStr(dateStart)} — ${dateToStr(dateEnd)}`
      : isDate(dateStart)
      ? `${dateToStr(dateStart)} — `
      : ''

  const [inputValue, setInputValue] = useState(dateStr)
  const [rangeInput, setRangeInput] = useState(dateStrRange)
  const dateRegexp = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/
  const ref = useRef()
  const setCorrectDate = () => {}

  const clear = range => {
    if (range) {
      setRangeInput('')
      setRangeState([null, null])
    } else {
      setInputValue('')
      setState(null)
    }
    showCal && setShowCal(true)
  }
  const handler = (value, source) => {
    if (source === 'input') {
      setInputValue(value)
      if (isDate(strToDate(value))) {
        setState(strToDate(value)), onPick && onPick(state)
      } else {
        setState(null), onPick && onPick(state)
      }
    } else {
      setState(value)
      setInputValue(dateToStr(value))
      onPick && onPick(state)
    }
  }
  const rangeHandler = (value, source) => {
    if (source === 'input') {
      if (value.length === 0) {
        setRangeInput('')
        setRangeState([null, null])
        onPick && onPick([null, null])
      } else {
        const dateArr = value.split(/ — /)
        const dateStart = dateArr[0].match(dateRegexp) ? strToDate(dateArr[0]) : null
        const dateEnd = dateArr[1].match(dateRegexp) ? strToDate(dateArr[1]) : null
        const newRange =
          dateStart && dateEnd
            ? dateStart > dateEnd
              ? [dateEnd, dateStart]
              : [dateStart, dateEnd]
            : dateStart
            ? [dateStart, null]
            : [null, null]
        const newValue =
          dateStart && dateEnd
            ? dateStart > dateEnd
              ? `${dateArr[1]} — ${dateArr[0]}`
              : `${dateArr[0]} — ${dateArr[1]}`
            : dateStart && !dateEnd
            ? `${dateArr[0]} — ${dateArr[1]}`
            : value
        setRangeInput(newValue)
        setRangeState(newRange)
        onPick && onPick(newRange)
      }
    } else {
      const dateStart = dateToStr(value[0])
      const dateEnd = dateToStr(value[1])
      const newRangeInput =
        isDate(value[0]) && isDate(value[1]) ? `${dateStart} — ${dateEnd}` : isDate(value[0]) ? `${dateStart} — ` : ''
      setRangeInput(newRangeInput)
      setRangeState(value)
      onPick && onPick(value)
    }
  }

  useClickOutside(ref, () => {
    setShowCal(false)
    setCorrectDate()
  })
  return (
    <Wrapper ref={ref} onFocus={() => setShowCal(true)} {...rest}>
      <InputWrapper disabled>
        {!range && (
          <StyledDateInput
            readOnly={readOnly}
            range={range}
            disabled={disabled}
            value={inputValue}
            onFocus={() => setShowCal(true)}
            onAccept={value => {
              handler(value, 'input')
            }}
            onClear={() => {
              clear()
            }}
          />
        )}
        {range && (
          <StyledDateInput
            range={range}
            disabled={disabled}
            readOnly={readOnly}
            rangeValue={rangeInput}
            onAcceptRange={value => {
              rangeHandler(value, 'input')
            }}
            onFocus={() => setShowCal(true)}
            onClear={() => {
              clear(true)
            }}
          />
        )}
      </InputWrapper>
      <CalendarWrapper>
        {!disabled && !range && showCal && (
          <InnerWrapper>
            <Spacer space={8} />
            <Calendar
              readOnly={readOnly}
              date={isDate(strToDate(state)) ? strToDate(state) : null}
              onPick={value => handler(value, 'calc')}
            />
          </InnerWrapper>
        )}
        {!disabled && range && showCal && (
          <InnerWrapper>
            <Spacer space={8} />
            <Calendar
              readOnly={readOnly}
              range={range}
              dateStart={rangeState[0]}
              dateEnd={rangeState[1]}
              onPick={value => {
                rangeHandler(value, 'calc')
              }}
            />
          </InnerWrapper>
        )}
      </CalendarWrapper>
    </Wrapper>
  )
}
const StyledDateInput = styled(DateInput)``
const CalendarWrapper = styled.div`
  z-index: ${theme.z_indexes.high};
  position: relative;
`
const InnerWrapper = styled.div`
  z-index: ${theme.z_indexes.high};
  position: absolute;
  top: 0;
`
const Wrapper = styled.div`
  outline: none;
  z-index: ${theme.z_indexes.high};
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  width: 100%;
`
const InputWrapper = styled.div``

DatePicker.propTypes = {
  range: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
  dateStart: PropTypes.instanceOf(Date),
  dateEnd: PropTypes.instanceOf(Date),
  onPick: PropTypes.func
}
