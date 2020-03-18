/* eslint-disable no-magic-numbers */
import React, { useState, useMemo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Spacer } from '../../atoms/Spacer'

import { builder, addMonths, isDate, isEqual } from './utils'
import { Navigation } from './atoms/Navigation'
import { DayGrid } from './atoms/DayGrid'
import { Year } from './atoms/Year'

import { theme } from 'theme'

const today = new Date()

const clean = date => {
  if (isDate(date)) {
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date
  } else return null
}
export const Calendar = ({
  date,
  initial = new Date(),
  dateStart,
  dateEnd,
  onPick,
  dual,
  range = dual,
  disabledDates = [],
  readOnly
}) => {
  const [state, setState] = useState(clean(date) || null)
  const initialRange = isDate(dateStart) ? (isDate(dateEnd) ? [dateStart, dateEnd] : [dateStart, null]) : [null, null]
  const [rangeState, setRange] = useState(initialRange)
  const initialView =
    range || dual
      ? isDate(initialRange[1])
        ? initialRange[1]
        : isDate(initialRange[0])
        ? initialRange[0]
        : initial
      : isDate(date)
      ? date
      : initial
  const [view, setView] = useState(initialView)
  const [hovered, setHovered] = useState(null)
  const [yearPicker, setYearPicker] = useState(false)
  const ref = useRef()
  const dualView = addMonths(view, 1)
  const dayList = useMemo(() => builder(dual, view.getMonth(), view.getFullYear()), [
    view.getMonth(),
    view.getFullYear()
  ])
  const dayListDual = useMemo(() => builder(dual, dualView.getMonth(), dualView.getFullYear()), [
    dualView.getMonth(),
    dualView.getFullYear()
  ])
  const setSelected = day => {
    setState(day)
    day.getMonth() !== view.getMonth() && setView(day)
    onPick && onPick(day)
  }
  const setRangeSelected = day => {
    let newRange
    if ((isDate(rangeState[0]) && isDate(rangeState[1])) || (!isDate(rangeState[0]) && !isDate(rangeState[1]))) {
      newRange = [day, null]
      setRange([day, null])
    } else {
      day > rangeState[0] ? (newRange = [rangeState[0], day]) : (newRange = [day, rangeState[0]])
    }
    setRange(newRange)
    onPick && onPick(newRange)
  }
  useEffect(() => {
    if (!range) {
      if (!isEqual(date, state)) {
        isDate(date) ? (setState(date), setView(date)) : setState(null)
      }
    }
    if (range) {
      if (dateStart && (dateStart !== rangeState[0] || dateEnd !== rangeState[1])) {
        if (dateStart < dateEnd && dateStart) {
          setRange([dateStart, dateEnd])
        }
        if (dateStart > dateEnd && dateEnd && dateStart) {
          setRange([dateEnd, dateStart])
        } else {
          setRange([dateStart, dateEnd])
        }
        isDate(dateEnd) && setView(dateEnd)
        isDate(dateStart) && !isDate(dateEnd) && setView(dateStart)
        setHovered(null)
      }
      if (!dateStart && dateEnd) {
        setRange([null, null])
        setHovered(null)
      }
      if (!dateStart && rangeState[0]) {
        setRange([null, null])
        setHovered(null)
      }
    }
  }, [date, dateStart, dateEnd])

  return (
    <React.Fragment>
      {!yearPicker &&
        (!dual ? (
          <Wrapper>
            <Navigation
              month={view.getMonth()}
              year={view.getFullYear()}
              onPrev={() => {
                !readOnly && setView(addMonths(view, -1))
              }}
              onNext={() => {
                !readOnly && setView(addMonths(view, 1))
              }}
              showYearPicker={!readOnly && setYearPicker}
            />
            <Spacer space={8} />
            <DayGrid
              selectedRef={ref}
              _hovered={hovered}
              setHovered={!readOnly && setHovered}
              range={range}
              selected={state}
              rangeSelected={rangeState}
              setSelected={!readOnly && setSelected}
              setRangeSelected={!readOnly && setRangeSelected}
              dayList={dayList}
              curMonth={view.getMonth()}
              disabledDates={disabledDates}
            />
          </Wrapper>
        ) : (
          <Flex>
            <Wrapper dual={true}>
              <Navigation
                dual={'left'}
                month={view.getMonth()}
                year={view.getFullYear()}
                onPrev={() => {
                  !readOnly && setView(addMonths(view, -2))
                }}
              />
              <Spacer space={8} />
              <DayGrid
                dual={true}
                _hovered={hovered}
                setHovered={!readOnly && setHovered}
                range={true}
                selected={rangeState}
                rangeSelected={rangeState}
                setSelected={!readOnly && setSelected}
                setRangeSelected={!readOnly && setRangeSelected}
                dayList={dayList}
                curMonth={view.getMonth()}
              />
            </Wrapper>
            <Wrapper dual={true}>
              <Navigation
                dual={'right'}
                month={dualView.getMonth()}
                year={dualView.getFullYear()}
                onNext={() => {
                  setView(addMonths(view, 2))
                }}
              />
              <Spacer space={8} />
              <DayGrid
                dual={true}
                _hovered={hovered}
                setHovered={!readOnly && setHovered}
                range={true}
                selected={rangeState}
                rangeSelected={rangeState}
                setSelected={!readOnly && setSelected}
                setRangeSelected={!readOnly && setRangeSelected}
                dayList={dayListDual}
                curMonth={dualView.getMonth()}
              />
            </Wrapper>
          </Flex>
        ))}
      {yearPicker && (
        <Year
          value={view.getFullYear()}
          onPick={year => {
            setYearPicker(false)
            setView(new Date(view.setYear(year)))
          }}
        />
      )}
    </React.Fragment>
  )
}

const Flex = styled.div`
  width: 576px;
  display: flex;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.12);
`
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 288px;
  height: 336px;
  float: left;
  background-color: ${theme.colors.white};
  padding: 20px;
  box-shadow: ${({ dual }) => (dual ? null : '0px 20px 30px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.12)')};
`

Calendar.propTypes = {
  initial: PropTypes.instanceOf(Date),
  date: PropTypes.instanceOf(Date),
  dateStart: PropTypes.instanceOf(Date),
  dateEnd: PropTypes.instanceOf(Date),
  onPick: PropTypes.func,
  dual: PropTypes.bool,
  range: PropTypes.bool,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date))
}
