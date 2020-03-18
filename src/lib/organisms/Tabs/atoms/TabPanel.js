/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const TabPanel = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div``

TabPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array, PropTypes.string]),
  active: PropTypes.bool
}
