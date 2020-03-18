/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { TabContext } from '../molecules/Tabs'

import { theme } from 'theme'
import { Flex } from 'lib/atoms/Primitives'
import { Divider } from 'lib/atoms/Divider'
import { useForce } from 'hooks/useForce'
import { useWindowSize } from 'hooks/useWindowSize'
import { useDidUpdate } from 'hooks'

export const TabsBar = ({ children, onChange, withDivider = false }) => {
  const { tab } = useContext(TabContext)
  const forceUpdate = useForce()
  const { width, height } = useWindowSize()

  useDidUpdate(() => {
    forceUpdate()
  }, [width, height])

  const modedChildren = React.Children.map(children, (child, idx) => {
    const childIndex = 0
    const childTab = child.props.tab ? child.props.tab : childIndex
    const active = tab === childTab
    const last = children.length - 1 === idx
    return React.cloneElement(child, { onChange, active, last })
  })

  return (
    <React.Fragment>
      <Wrapper>
        <PerfectScrollbar>
          <Flex justify="space-between">{modedChildren}</Flex>
          {withDivider && <StyledDivider horizontal />}
        </PerfectScrollbar>
      </Wrapper>
      <MobWrapper>
        <Flex justify="space-between">{modedChildren}</Flex>
        {withDivider && <StyledDivider horizontal />}
      </MobWrapper>
    </React.Fragment>
  )
}

const StyledDivider = styled(Divider)`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: -1;
`

const Wrapper = styled.div`
  display: none;
  width: 100%;
  position: relative;
  @media (min-width: ${theme.breakpoints.none}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (pointer: coarse) {
    display: none;
  }
`

const MobWrapper = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  -ms-overflow-style: none;
  overflow-x: auto;
  padding: 0 16px;

  & * {
    word-break: keep-all;
  }

  @media (min-width: ${theme.breakpoints.none}px) {
    display: none;
  }

  @media (pointer: coarse) {
    display: flex;
  }
`

TabsBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array]),
  onChange: PropTypes.func,
  withDivider: PropTypes.bool
}
