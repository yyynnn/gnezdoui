/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Money } from '../../Money'
import { Text } from '../../Text/Text'

import { theme } from 'theme'
export const Borders = ({ borderType = 'currency', period = 'years', currency, min, max }) => {
  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
  }
  const suffixes = {
    years: ['года', 'года', 'лет'],
    months: ['месяца', 'месяца', 'месяцев'],
    days: ['дня', 'дня', 'дней']
  }
  return (
    <Wrapper>
      <React.Fragment>
        <Border>
          {borderType === 'currency' && <Money currency={currency} value={`${min}`} textAppend={'от '} />}
          {borderType === 'period' && <Text>{`от ${min} ${declOfNum(min, suffixes[period])}`}</Text>}
        </Border>
        <Border>
          {borderType === 'currency' ? <Money currency={currency} value={`${max}`} textAppend={'до '} /> : <Text />}
          {borderType === 'period' && <Text>{`до ${max} ${declOfNum(max, suffixes[period])}`}</Text>}
        </Border>
      </React.Fragment>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.gray.g300};
  padding: 0;
  /* padding-right: 26px;
  padding-left: 30px; */
`

const Border = styled.li``

Borders.propTypes = {
  type: PropTypes.oneOf(['borders', 'steps'])
}
