/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'theme'

const calculateFS = size => {
  return size === 'lg' ? 16 : size === 'md' ? 14 : size === 'sm' ? 12 : 10
}

const calculateLH = (size, caption) => {
  return size === 'lg' ? 24 : size === 'md' || (size === 'md' && caption) ? 20 : 16
}

export const Text = ({
  children,
  className,
  size = 'md',
  sizemob = 'md',
  capitalize = false,
  bold = false,
  caption = false,
  reset = false,
  ...rest
}) => {
  return (
    <Wrapper
      caption={caption}
      bold={bold}
      size={size}
      sizemob={sizemob}
      className={className}
      capitalize={capitalize ? 'capitalize' : 'none'}
      reset={reset}
      {...rest}
      data-testid="text"
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: ${({ sizemob }) => calculateFS(sizemob)}px;
  line-height: ${({ sizemob, caption, reset }) => (reset ? '1em' : `${calculateLH(sizemob, caption)}px`)};
  letter-spacing: 0px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  margin-top: 0;
  margin-bottom: 0;
  text-align: ${({ align }) => align};
  text-transform: ${({ capitalize, caption }) => (caption ? 'uppercase' : capitalize)};
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;

  & * {
    font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    font-size: ${({ size }) => calculateFS(size)}px;
    line-height: ${({ size, caption, reset }) => (reset ? '1em' : `${calculateLH(size, caption)}px`)};
  }
`

Text.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'tiny']),
  sizemob: PropTypes.oneOf(['lg', 'md', 'sm', 'tiny']),
  capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  caption: PropTypes.bool,
  reset: PropTypes.bool
}
