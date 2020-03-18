/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gaps } from './Container'

import { theme } from 'theme'

export const GridContextRow = React.createContext()

const columnsSizes = { basic: 12, mob: 12 }

const createGapsStyles = gaps =>
  Object.keys(gaps).map(gapKey => {
    return `@media (min-width: ${theme.breakpoints[gapKey]}px) { column-gap: ${gaps[gapKey]}px; }`
  })

const RowComponent = ({ children, className, fillHeight = false, columns = columnsSizes }) => {
  const gapStyles = createGapsStyles(gaps)
  return (
    <StyledRow gaps={gapStyles} className={className}>
      <GridContextRow.Provider value={{ columns, fillHeight }}>{children}</GridContextRow.Provider>
    </StyledRow>
  )
}

export const Row = props => {
  return <RowComponent {...props}>{props.children}</RowComponent>
}

const StyledRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 0;
  grid-template-columns: repeat(${columnsSizes.basic}, [col-start] 1fr);
  ${({ gaps }) => gaps};

  @media (max-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(${columnsSizes.mob}, [col-start] 1fr);
  }
`

Row.propTypes = { children: PropTypes.any, className: PropTypes.string, fillHeight: PropTypes.bool }
