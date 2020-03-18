/* eslint-disable no-magic-numbers */
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { Icon, Spacer, Text } from 'lib'
import { theme } from 'theme'

const builder = year => {
  return [...new Array(201)].map((n, i) => {
    return year + i
  })
}

// eslint-disable-next-line no-use-extend-native/no-use-extend-native
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b])
  return this >= min && this <= max
}

export const Year = ({ value, start, end, range = false, onPick }) => {
  const ref = useRef()
  const [state, setState] = useState(value)
  const [scrolled, setScrolled] = useState(false)
  const [hoverRange, setHoverRange] = useState(null)
  const [yearStart, setYearStart] = useState(start)
  const [yearEnd, setYearEnd] = useState(end)
  const current = new Date().getFullYear()
  const currentView = builder(1920)
  const offset = Math.ceil((currentView.indexOf(state || yearStart || current) + 1) / 3) * 54 - 50

  const handler = value => {
    setState(value)
    onPick && onPick(value)
  }
  const handlerRanged = value => {
    !yearStart
      ? (() => {
          setYearStart(value)
          setHoverRange(value)
          onPick && onPick([value, null])
        })()
      : !yearEnd
      ? (() => {
          value > yearStart
            ? (() => {
                setYearEnd(value)
                setHoverRange(null)
                onPick && onPick([yearStart, value])
              })()
            : (() => {
                setYearStart(value)
                setYearEnd(yearStart)
                setHoverRange(null)
                onPick && onPick([value, yearStart])
              })()
          setHoverRange('')
        })()
      : (() => {
          setYearEnd(null)
          setYearStart(value)
          setHoverRange(value)
          onPick && onPick([value, null])
        })()
  }
  const isPicked = value => {
    return state === value
  }
  const isStart = value => {
    return yearStart === value
  }
  const isEnd = value => {
    return yearEnd === value
  }
  const isHovered = value => {
    return hoverRange === value
  }
  const isInRange = value => {
    return hoverRange && !yearEnd
      ? value.between(yearStart, hoverRange)
      : yearEnd
      ? value.between(yearStart, yearEnd)
      : false
  }
  const isRangeClosed = () => {
    return yearStart && yearEnd
  }
  const isBigger = year => {
    return year > yearStart
  }
  const setOffset = () => {
    ref.current._ps.element.scrollTop = offset
    setScrolled(true)
  }
  useEffect(() => {
    !scrolled && setOffset()
  }, [])

  return (
    <MainWrapper>
      <PerfectScrollbar ref={ref}>
        <GridWrapper>
          {!range &&
            currentView.map((year, i) => (
              <Wrapper key={i}>
                <YearWrapper
                  tabIndex={1}
                  key={i}
                  isPicked={isPicked(year)}
                  onClick={() => handler(year)}
                  current={current === year}
                >
                  <Text size="lg">{year}</Text>
                </YearWrapper>
              </Wrapper>
            ))}
          {range &&
            currentView.map((year, i) => (
              <Wrapper
                key={i}
                onMouseEnter={() => {
                  yearStart && !isRangeClosed() && setHoverRange(year)
                }}
              >
                <Background
                  border_right={(i + 1) % 3 === 0 && i != 0 && true}
                  border_left={i % 3 === 0 && true}
                  isHovered={isHovered(year)}
                  isBigger={isBigger(year)}
                  rangeUp={hoverRange > start}
                  inRange={isInRange(year)}
                  rangeClosed={isRangeClosed()}
                  isSameYear={yearStart === yearEnd}
                  isStart={year === yearStart}
                  isEnd={year === yearEnd}
                />
                <YearWrapper
                  key={i}
                  tabIndex={1}
                  isStart={isStart(year)}
                  isEnd={isEnd(year)}
                  onClick={() => handlerRanged(year)}
                  current={current === year}
                  inRange={isInRange(year)}
                >
                  <Text size="lg">{year}</Text>
                </YearWrapper>
              </Wrapper>
            ))}
        </GridWrapper>
      </PerfectScrollbar>
    </MainWrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 32px;
`
const Background = styled.div`
  z-index: ${theme.z_indexes.zero};
  height: 32px;
  border-top-left-radius: ${({ isStart, border_left, isHovered, isBigger }) =>
    isStart || border_left || (isHovered && !isBigger) ? theme.radiuses.basic : null}px;
  border-bottom-left-radius: ${({ isStart, border_left, isHovered, isBigger }) =>
    isStart || border_left || (isHovered && !isBigger) ? theme.radiuses.basic : null}px;
  border-top-right-radius: ${({ border_right, isEnd, isHovered, isBigger }) =>
    isEnd || border_right || (isHovered && isBigger) ? theme.radiuses.basic : null}px;
  border-bottom-right-radius: ${({ border_right, isEnd, isHovered, isBigger }) =>
    isEnd || border_right || (isHovered && isBigger) ? theme.radiuses.basic : null}px;
  background: ${({ inRange, rangeClosed }) =>
    !inRange ? null : rangeClosed ? 'rgba(234, 33, 46, 0.12)' : theme.colors.gray.g600};
  margin-right: ${({ isEnd, isStart, border_right, isHovered, isBigger, rangeUp, rangeClosed }) =>
    border_right || isEnd || (isHovered && isBigger) || (isStart && isHovered) || (isStart && rangeUp && !rangeClosed)
      ? null
      : '-4px'};
  transition: all 125ms ease-in-out;
`

const YearWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  outline: none;
  top: 0;
  text-align: center;
  width: 100%;
  height: 32px;
  background: ${({ isStart, isEnd, isPicked }) => (isStart || isEnd || isPicked ? theme.colors.red.primary : null)};
  color: ${({ isStart, isEnd, isPicked, current, inRange }) =>
    isStart || isEnd || isPicked ? theme.colors.white : current && !inRange ? theme.colors.red.primary : null};
  border: 2px solid transparent;
  border-radius: ${theme.radiuses.basic}px;
  border-color: ${({ current, inRange }) => (current && !inRange ? 'rgba(234, 33, 46, 0.12)' : null)};

  > div {
    line-height: 28px;
  }

  :hover {
    background: ${({ isStart, isEnd, isPicked }) =>
      isStart || isEnd || isPicked ? theme.colors.red.activehover : theme.colors.gray.g600};
    border-color: ${({ isStart, isEnd, isPicked }) =>
      isStart || isEnd || isPicked ? theme.colors.red.activehover : theme.colors.gray.g600};
  }

  :active {
    background: ${({ isStart, isEnd, isPicked }) =>
      isStart || isEnd || isPicked ? theme.colors.red.active : theme.colors.white};
    border-color: ${({ isStart, isEnd, isPicked }) =>
      isStart || isEnd || isPicked ? theme.colors.red.active : theme.colors.gray.primary};
  }
  transition: all 125ms ease-in-out;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 80px;
  column-gap: 4px;
  row-gap: 24px;
`
const MainWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 288px;
  height: 336px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: 4px solid ${theme.colors.white};
  padding: 16px;
  padding-bottom: 0px;
  padding-right: 0px;
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  background-color: ${theme.colors.white};
`

Year.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  value: PropTypes.number,
  range: PropTypes.bool,
  onPick: PropTypes.func
}
