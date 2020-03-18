/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Inner = styled.div`
  opacity: ${({ opacity }) => opacity / 100};
`

export const Opacity = ({ opacity = 50, children, ...rest }) => (
  <Inner data-testid="opacity" opacity={opacity} {...rest}>
    {children}
  </Inner>
)

Opacity.propTypes = { opacity: PropTypes.number }
