/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from 'theme'

export const Divider = ({ className, vertical = false, horizontal = true }) => {
  return <DividerInner className={className} vertical={vertical} horizontal={horizontal} data-testid="divider" />
}

const DividerInner = styled.div`
  background-color: ${theme.colors.gray.g600};
  min-height: ${({ vertical, horizontal }) => (vertical && !horizontal ? '100%' : '1px')};
  min-width: ${({ vertical, horizontal }) => (vertical && !horizontal ? '1px' : '100%')};
`

Divider.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool
}
