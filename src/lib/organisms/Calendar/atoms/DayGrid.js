/* eslint-disable no-magic-numbers */
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../../../atoms/Text'
import { isEqual, inRange, isDate, today } from '../utils'

import { theme } from 'theme'

export const DayGrid = ({
  dual,
  range,
  _hovered,
  setHovered,
  dayList,
  curMonth,
  selected,
  rangeSelected,
  setSelected,
  setRangeSelected
}) => {
  return (
    <Wrapper>
      {dayList.map((day, i) => {
        const border_right = !dual
          ? (i + 1) % 7 === 0 && i != 0
          : ((i + 1) % 7 === 0 && i != 0) || !isDate(dayList[i + 1])
        const border_left = !dual ? i % 7 === 0 : i % 7 === 0 || !isDate(dayList[i - 1])
        const _inRange = isDate(rangeSelected[1]) && inRange(day, rangeSelected)
        const inHoverRange = isDate(rangeSelected[0]) && inRange(day, [rangeSelected[0], _hovered])
        const hovered = isEqual(day, _hovered)
        const hoverSame = isEqual(_hovered, rangeSelected[0])
        const isStart = isEqual(day, rangeSelected[0])
        const isEnd = isEqual(day, rangeSelected[1])
        const isBigger = _hovered > rangeSelected[0]
        const rangeClosed = isDate(rangeSelected[0]) && isDate(rangeSelected[1])
        const hoverRange = isDate(rangeSelected[0]) && !isDate(rangeSelected[1])
        const oneDayRange = isEqual(rangeSelected[0], rangeSelected[1])
        return !isDate(day) ? (
          <Background key={i} />
        ) : (
          <Background
            border_right={border_right}
            border_left={border_left}
            inRange={_inRange}
            inHoverRange={inHoverRange}
            rangeClosed={rangeClosed}
            oneDayRange={oneDayRange}
            key={i}
            index={i}
          >
            <BackgroundLeft
              hovered={hovered}
              border_right={border_right}
              border_left={border_left}
              hoverSame={hoverSame}
              isStart={isStart}
              isEnd={isEnd}
              isBigger={isBigger}
              rangeClosed={rangeClosed}
              hoverRange={hoverRange}
              inRange={_inRange}
              inHoverRange={inHoverRange}
              oneDayRange={oneDayRange}
            />
            <BackgroundRight
              hovered={hovered}
              hoverSame={hoverSame}
              border_right={border_right}
              border_left={border_left}
              isBigger={_hovered > rangeSelected[0]}
              isStart={isStart}
              isEnd={isEnd}
              rangeClosed={rangeClosed}
              hoverRange={hoverRange}
              inRange={inRange}
              inHoverRange={inHoverRange}
              oneDayRange={oneDayRange}
            />
            <StyledText
              tabIndex="1"
              today={isEqual(day, today())}
              size="lg"
              hoverable={!range ? true : (!isDate(rangeSelected[0]) && !isDate(rangeSelected[1])) || rangeClosed}
              active={curMonth === day.getMonth()}
              selected={isEqual(day, selected) || isEqual(day, rangeSelected[0]) || isEqual(day, rangeSelected[1])}
              border_right={border_right}
              border_left={border_left}
              onClick={() => {
                !range && setSelected(day)
                range && (setHovered(day), setRangeSelected(day))
              }}
              onMouseEnter={() => {
                range && !isDate(rangeSelected[1]) && isDate(rangeSelected[0]) && setHovered(day)
              }}
            >
              {day.getDate()}
            </StyledText>
          </Background>
        )
      })}
    </Wrapper>
  )
}

const BackgroundLeft = styled.div`
  position: absolute;
  height: 100%;
  width: ${({ border_left }) => (border_left ? '32px' : '34px')};
  border-radius: ${theme.radiuses.basic}px;
  background-color: ${({ hoverSame, hovered, isBigger, isEnd, isStart, rangeClosed, hoverRange, oneDayRange }) =>
    hoverSame && !rangeClosed
      ? 'transparent'
      : hovered && isBigger && !rangeClosed
      ? theme.colors.gray.g600
      : isEnd && rangeClosed && !oneDayRange
      ? '#FCE4E6'
      : (isEnd && !rangeClosed) || (isStart && hoverRange && !isBigger && !rangeClosed)
      ? theme.colors.gray.g600
      : 'transparent'};
  border-top-left-radius: ${({ border_left }) => (border_left ? theme.radiuses.basic : 0)}px;
  border-bottom-left-radius: ${({ border_left }) => (border_left ? theme.radiuses.basic : 0)}px;
  transition: all 125ms ease-in-out;
`

const BackgroundRight = styled.div`
  position: absolute;
  height: 100%;
  width: ${({ border_right }) => (border_right ? '32px' : '34px')};
  right: 0;
  background-color: ${({ hovered, hoverSame, isBigger, isStart, rangeClosed, hoverRange, oneDayRange }) =>
    hoverSame && !rangeClosed
      ? 'transparent'
      : hovered && !isBigger && !rangeClosed
      ? theme.colors.gray.g600
      : isStart && rangeClosed && !oneDayRange
      ? '#FCE4E6'
      : isStart && hoverRange && isBigger && !rangeClosed
      ? theme.colors.gray.g600
      : 'transparent'};
  border-radius: ${theme.radiuses.basic}px;
  border-top-right-radius: ${({ border_right }) => (border_right ? theme.radiuses.basic : 0)}px;
  border-bottom-right-radius: ${({ border_right }) => (border_right ? theme.radiuses.basic : 0)}px;
  transition: all 125ms ease-in-out;
`

const StyledText = styled(Text)`
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  line-height: 28px;
  color: ${({ active, selected, today }) =>
    today && !selected
      ? theme.colors.red.primary
      : selected
      ? theme.colors.white
      : active
      ? theme.colors.gray.primary
      : theme.colors.gray.g300};
  text-align: center;
  left: ${({ border_left, border_right }) => (!border_left && !border_right ? '2px' : border_left ? null : '2px')};
  right: ${({ border_right }) => border_right && '0'};
  background-color: ${({ selected }) => (selected ? theme.colors.red.primary : 'transparent')};
  border-radius: ${theme.radiuses.basic}px;
  width: 32px;
  height: 32px;
  border: 2px solid;
  border-color: ${({ selected }) => (selected ? theme.colors.red.primary : 'transparent')};
  ${({ hoverable, selected }) =>
    hoverable &&
    `
  :hover {
    background-color: ${selected ? theme.colors.red.activehover : theme.colors.gray.g600};
    border-color: ${selected ? theme.colors.red.activehover : theme.colors.gray.g600};
  }

  :active {
    border-color: ${selected ? theme.colors.red.active : theme.colors.gray.g300};
    background-color: ${selected ? theme.colors.red.active : theme.colors.white};
  }
  `};
  transition: all 125ms ease-in-out;
`
const Wrapper = styled.div`
  width: 248px;
  height: 212px;
  display: grid;
  grid-template-columns: 34px 36px 36px 36px 36px 36px 34px;
  grid-template-rows: 32px 32px 32px 32px 32px 32px;
  grid-row-gap: 4px;
  transition: all ${theme.transitions.basic};
`

const Background = styled.div`
  position: relative;
  background-color: ${({ inRange, inHoverRange, rangeClosed, oneDayRange }) =>
    inRange && rangeClosed && !oneDayRange ? '#FCE4E6' : inHoverRange ? theme.colors.gray.g600 : 'transparent'};
  border-top-left-radius: ${({ border_left }) => border_left && theme.radiuses.basic}px;
  border-bottom-left-radius: ${({ border_left }) => border_left && theme.radiuses.basic}px;
  border-top-right-radius: ${({ border_right }) => border_right && theme.radiuses.basic}px;
  border-bottom-right-radius: ${({ border_right }) => border_right && theme.radiuses.basic}px;
  transition: all 125ms ease-in-out;
`

DayGrid.propTypes = {}
