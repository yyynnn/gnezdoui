import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../../../atoms/Text'
import { Spacer } from '../../../atoms/Spacer'
import { Icon } from '../../../atoms/Icon'
import { weekDays, monthNames } from '../utils'

import { theme } from 'theme'

export const Navigation = ({ dual, month, year, onPrev, onNext, showYearPicker }) => {
  const week_days = weekDays.map((day, i) => (
    // eslint-disable-next-line no-magic-numbers
    <WeekDay key={i} weekEnd={i === 5 || i === 6}>
      <Text size="sm">{day}</Text>
    </WeekDay>
  ))
  const monthName = monthNames[month]
  return (
    <React.Fragment>
      <Wrapper>
        {!dual && (
          <React.Fragment>
            <TextWrapper>
              <Spacer space={4} />
              <StyledText bold>{monthName}</StyledText>
              <Spacer space={8} />
              <StyledText year bold onClick={showYearPicker}>
                {year}
              </StyledText>
            </TextWrapper>
            <IconWrapper>
              <StyledIcon type="arrow_left" fill={theme.colors.gray.primary} onClick={onPrev} />
              <Spacer space={8} />
              <StyledIcon type="arrow_right" fill={theme.colors.gray.primary} onClick={onNext} />
            </IconWrapper>
          </React.Fragment>
        )}
        {dual === 'left' && (
          <React.Fragment>
            <IconWrapper>
              <StyledIcon type="arrow_left" fill={theme.colors.gray.primary} onClick={onPrev} />
            </IconWrapper>
            <TextWrapper>
              <StyledText bold>{monthName}</StyledText>
              <Spacer space={8} />
              <StyledText bold>{year}</StyledText>
            </TextWrapper>
          </React.Fragment>
        )}
        {dual === 'right' && (
          <React.Fragment>
            <TextWrapper>
              <StyledText bold>{monthName}</StyledText>
              <Spacer space={8} />
              <StyledText bold>{year}</StyledText>
            </TextWrapper>
            <IconWrapper>
              <StyledIcon type="arrow_right" fill={theme.colors.gray.primary} onClick={onNext} />
            </IconWrapper>
          </React.Fragment>
        )}
      </Wrapper>
      <Spacer space={12} />
      <Week>{week_days}</Week>
    </React.Fragment>
  )
}

const WeekDay = styled.div`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: ${() => '8px 4px'};
  text-align: center;
  color: ${({ weekEnd }) => (weekEnd ? theme.colors.red.primary : theme.colors.gray.secondary)};
`

const Week = styled.div`
  height: 32px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 4px;
  row-gap: 4px;
`

const TextWrapper = styled.div`
  display: flex;
`
const IconWrapper = styled.div`
  display: flex;
`
const Wrapper = styled.div`
  height: ${theme.sizes.lesser.lg}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const StyledText = styled(Text)`
  font-size: 16px;
  line-height: 32px;
  color: ${({ year }) => year && theme.colors.blue.primary};
  cursor: ${({ year }) => year && 'pointer'};
`
const StyledIcon = styled(Icon)`
  cursor: pointer;
  padding: 4px;
`
Navigation.propTypes = {}
