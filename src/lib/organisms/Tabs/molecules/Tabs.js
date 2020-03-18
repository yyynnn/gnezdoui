/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { theme } from 'theme'

export const TabContext = React.createContext()

export const Tabs = ({ children, tab, ...rest }) => {
  const tabsData = { tab }
  return (
    <TabsWrapper {...rest}>
      <TabContext.Provider value={tabsData}>{children}</TabContext.Provider>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div``

Tabs.propTypes = {
  children: PropTypes.any,
  tab: PropTypes.string
}
