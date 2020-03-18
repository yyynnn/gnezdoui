/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Calendar, Year, Tabs, Tab, TabPanels, TabPanel, TabsBar, Text } from 'lib'

export const CalendarDemo = props => {
  const [tab, setTab] = useState('Date (single)')
  const handleChange = (event, tab) => {
    setTab(tab)
  }

  return (
    <Tabs tab={tab}>
      <TabsBar onChange={handleChange} withDivider>
        <Tab tab="Date (single)" label="Date (single)" />
        <Tab tab="Date [range]" label="Date [range]" />
        <Tab tab="Dual" label="Dual" />
        <Tab tab="Year (single)" label="Year (single)" />
        <Tab tab="Year [range]" label="Year [range]" />
      </TabsBar>
      <TabPanels>
        <TabPanel tab="Date (single)">
          <Calendar date={new Date()} />
        </TabPanel>
        <TabPanel tab="Date [range]">
          <Calendar range={true} dateStart={new Date(2011, 1, 2)} dateEnd={new Date(2011, 1, 5)} />
        </TabPanel>
        <TabPanel tab="Dual">
          <Calendar dual={true} />
        </TabPanel>
        <TabPanel tab="Year (single)">
          <Year />
        </TabPanel>
        <TabPanel tab="Year [range]">
          <Year range={true} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

const Wrapper = styled.div``

CalendarDemo.propTypes = {}
