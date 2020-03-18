/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { theme } from 'theme'

export const Dropdown = ({ children }) => {
  return (
    <Wrapper data-testid="dropdown">
      <StyledPerfectScrollbar>{children}</StyledPerfectScrollbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: ${theme.shadows.top};
  border-radius: ${theme.radiuses.basic}px;
  max-height: 192px;
  background-color: ${theme.colors.white};
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: ${theme.z_indexes.med};
`

const StyledPerfectScrollbar = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
`

Dropdown.propTypes = { children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array]) }
