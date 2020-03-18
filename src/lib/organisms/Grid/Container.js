/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from 'theme'

export const GridContextContainer = React.createContext()

export const gaps = { none: 16, mob: 16, sm: 36, md: 36, lg: 48 }

export const Container = ({ className, children, fluid = false, fluidmob = false }) => {
  return (
    <StyledContainer fluid={fluid ? fluid : null} fluidmob={fluidmob} className={className} data-testid="container">
      <GridContextContainer.Provider value={gaps}>{children}</GridContextContainer.Provider>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 0;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${theme.breakpoints.mob}px) {
    width: ${({ fluid, fluidmob }) => (fluid || fluidmob ? '100%' : `${theme.breakpoints.mob}px`)};
    padding: ${({ fluid, fluidmob }) => !fluid && !fluidmob && '0 16px'};
    max-width: 100%;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: ${({ fluid }) => (fluid ? '100%' : `${theme.breakpoints.sm}px`)};
    padding: ${({ fluid }) => !fluid && '0 74px'};
    max-width: 100%;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: ${({ fluid }) => (fluid ? '100%' : `${theme.breakpoints.md}px`)};
    padding: ${({ fluid }) => !fluid && '0 64px'};
    max-width: 100%;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    width: ${({ fluid }) => (fluid ? '100%' : `${theme.breakpoints.lg}px`)};
    padding: ${({ fluid }) => !fluid && '0 154px'};
    max-width: 100%;
  }
`

Container.propTypes = { fluid: PropTypes.bool, fluidmob: PropTypes.bool }
