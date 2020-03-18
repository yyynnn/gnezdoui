/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TabContext } from '../molecules/Tabs'

export const TabPanels = ({ children }) => {
  const { tab } = useContext(TabContext)
  const modedChildren = React.Children.map(children, child => {
    const childIndex = 0
    const childTab = child.props.tab ? child.props.tab : childIndex
    const active = tab === childTab

    return active ? React.cloneElement(child, { active }) : null
  })
  return <Wrapper>{modedChildren}</Wrapper>
}

const Wrapper = styled.div``

TabPanels.propTypes = { children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array]) }
