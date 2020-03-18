import React, { useState } from 'react'
import styled from 'styled-components'

import { Container, Tab, Tabs, TabsBar, Divider } from 'lib'
import { theme } from 'theme'

export const NavBottom = ({ data, customData }) => {
  let { subMenu } = data
  const initVal = customData ? customData[0].label : subMenu[0].label
  const [tab, setTab] = useState(initVal)
  const handleChange = (e, tab) => {
    setTab(tab)
  }
  subMenu = customData ? customData : subMenu
  return (
    <StyledTabs tab={tab}>
      <TabsBar onChange={handleChange}>
        {subMenu.map((item, i) => {
          return (
            <Tab
              key={item.label}
              tab={item.label}
              label={item.label}
              onClick={() => handleChange(item.label)}
              to={item.url}
            />
          )
        })}
      </TabsBar>
    </StyledTabs>
  )
}
const StyledTabs = styled(Tabs)`
  pointer-events: all;

  & > div {
    div {
      font-size: 14px;
    }
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0;
  }
`
