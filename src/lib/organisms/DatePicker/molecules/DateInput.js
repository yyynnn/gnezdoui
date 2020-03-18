/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react'
import styled from 'styled-components'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import createAutoCorrectedRangePipe from '../DateRangePipe'
import { Icon } from '../../../atoms/Icon/Icon'
import { Input } from '../../../molecules/Input/Input'
import { isDate } from '../../Calendar/utils'

import { theme } from 'theme'

const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0')
}
const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd.mm.yyyy')
const autoCorrectedRangePipe = createAutoCorrectedRangePipe('dd.mm.yyyy')
const dateToStr = value => {
  const _date = !isDate(value) ? value : new Intl.DateTimeFormat('en-US').format(value).split('/')
  return !isDate(value) ? value : `${zeroPad(_date[1], 2)}.${zeroPad(_date[0], 2)}.${_date[2]}`
}

export const DateInput = ({
  range,
  disabled,
  readOnly,
  value,
  rangeValue,
  mask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
  placeholder = 'дд.мм.гггг',
  onAccept,
  onAcceptRange,
  className,
  onClear,
  ...rest
}) => {
  return (
    <Wrapper disabled={disabled} readOnly={readOnly} tabIndex={!disabled ? 1 : null} className={className}>
      {!range && (
        <WrapperDate>
          <StyledInput
            keepCharPositions={true}
            value={typeof dateToStr(value) !== 'string' ? '' : dateToStr(value)}
            mask={mask}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
            pipe={autoCorrectedDatePipe}
            guide={value === '' ? false : true}
            onChange={e => onAccept(e.target.value)}
            clear={disabled || readOnly ? false : true}
            onClear={onClear}
            {...rest}
          >
            <CalendarIcon type="calendar" fill={theme.colors.gray.g300} />
          </StyledInput>
        </WrapperDate>
      )}
      {range && (
        <React.Fragment>
          <WrapperRange>
            <StyledInput
              keepCharPositions={true}
              mask={[...mask, ' ', '—', ' ', ...mask]}
              value={rangeValue}
              disabled={disabled}
              placeholder={'дд.мм.гггг — дд.мм.гггг'}
              readOnly={readOnly}
              pipe={autoCorrectedRangePipe}
              guide={true}
              onChange={e => onAcceptRange(e.target.value)}
              clear={disabled || readOnly ? false : true}
              onClear={onClear}
              {...rest}
            >
              <CalendarIcon type="calendar" fill={theme.colors.gray.g300} />
            </StyledInput>
          </WrapperRange>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

const StyledInput = styled(Input)`
  input {
    text-indent: 30px;
  }
`

const WrapperRange = styled.div`
  position: relative;
  input {
    text-indent: 30px;
  }
`

const WrapperDate = styled.div`
  input {
    text-indent: 30px;
  }
`
const CalendarIcon = styled(Icon)`
  position: absolute;
  padding: 12px;
  top: 0;
`

const Wrapper = styled.div``
