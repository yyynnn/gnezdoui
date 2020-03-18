/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const calculateFS = h => (h <= 1 ? 64 : h >= 5 ? 20 : (64 * 3) / (2 * h))

const calculateLH = h => {
  return h === 1 ? 68 : h === 2 ? 52 : h === 3 ? 40 : h === 4 ? 32 : h === 5 ? 24 : 28
}

const calculateLS = h => {
  return h === 1 ? -1.5 : h === 2 ? -1 : h === 3 ? -0.5 : h === 4 ? -0.5 : h === 5 ? -0.5 : 0
}

export const Heading = ({ children, className, h = 6, capitalize = false, as }) => {
  return (
    <Wrapper
      as={as ? as : `h${h}`}
      h={h}
      className={className}
      capitalize={capitalize ? 'capitalize' : 'none'}
      data-testid="heading"
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.p`
  font-size: ${({ h }) => calculateFS(h)}px;
  line-height: ${({ h }) => calculateLH(h)}px;
  letter-spacing: ${({ h }) => calculateLS(h)}px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: ${({ h }) => (h === 6 ? 400 : 700)};
  text-align: ${({ align }) => align};
  text-transform: ${({ capitalize }) => capitalize};
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
`

Heading.propTypes = { children: PropTypes.any, h: PropTypes.number, capitalize: PropTypes.bool }
