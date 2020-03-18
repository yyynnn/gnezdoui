/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-undefined */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { GridContextRow } from './Row'

import { theme } from 'theme'

export const Col = ({ children, className, hostRef, style, width, mob, sm, md, lg }) => {
  const { columns: gridSize, fillHeight } = useContext(GridContextRow)
  const sizeData = { none: gridSize.mob, mob, sm, md, lg }
  const mediaString = Object.keys(sizeData)
    .filter(sizeType => sizeData[sizeType] !== undefined)
    .map(sizeType => {
      return `
        @media (min-width: ${theme.breakpoints[sizeType]}px) { grid-column-end: span ${sizeData[sizeType]}; }`
    })

  return (
    <StyledCol
      fillHeight={fillHeight}
      mediaString={mediaString}
      width={width}
      ref={hostRef}
      style={style}
      className={className}
    >
      {children}
    </StyledCol>
  )
}

const StyledCol = styled.div`
  grid-row-end: span 1;
  ${({ mediaString }) => mediaString};
  display: ${({ fillHeight }) => fillHeight && 'flex'};
`

Col.propTypes = { mob: PropTypes.string, sm: PropTypes.string, md: PropTypes.string, lg: PropTypes.string }
