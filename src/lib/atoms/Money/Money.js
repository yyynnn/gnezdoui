/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React from 'react'
import PropTypes from 'prop-types'
import { If, Then, Else } from 'react-if'

import { Text } from '../Text/Text'
import { Heading } from '../Heading'

const headingSize = 4
export const testId = 'money'

export const moneyFormat = (n, fractionDigits, currency) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(n)
}

export const Money = ({ className, currency = 'RUB', heading = false, value, textAppend }) => {
  const fractionDigits = value.includes('.') ? 2 : 0
  return (
    <div data-testid={testId}>
      <If condition={heading}>
        <Then>
          <Heading className={className} h={headingSize}>
            {textAppend} {moneyFormat(value, fractionDigits, currency)}
          </Heading>
        </Then>
        <Else>
          <Text className={className} size="lg">
            {textAppend} {moneyFormat(value, fractionDigits, currency)}
          </Text>
        </Else>
      </If>
    </div>
  )
}

Money.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string,
  heading: PropTypes.bool,
  className: PropTypes.string
}
