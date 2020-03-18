/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { DatePicker, Text, Button, Tabs, Tab, TabPanels, TabPanel, TabsBar } from 'lib'

export const DatePickerDemo = props => {
  const [tab, setTab] = useState('Single')
  const handleChange = (event, tab) => {
    setTab(tab)
  }
  const start = new Date(2019, 5, 13)
  const end = new Date(2019, 5, 14)

  return (
    <Wrapper>
      <Tabs tab={tab}>
        <TabsBar onChange={handleChange} withDivider>
          <Tab tab="Single" label="Single" />
          <Tab tab="Range" label="Range" />
          <Tab tab="Single (disabled)" label="Single (disabled)" />
          <Tab tab="Range (disabled)" label="Range (disabled)" />
          <Tab tab="Single (read-only)" label="Single (read-only)" />
          <Tab tab="Range (read-only)" label="Range (read-only)" />
        </TabsBar>
        <TabPanels>
          <TabPanel tab="Single">
            <DatePicker date={start} />
          </TabPanel>
          <TabPanel tab="Range">
            <DatePicker range={true} dateStart={start} dateEnd={end} />
          </TabPanel>
          <TabPanel tab="Single (disabled)">
            <DatePicker date={start} disabled={true} />
          </TabPanel>

          <TabPanel tab="Range (disabled)">
            <DatePicker dateStart={start} start={start} dateEnd={end} range={true} disabled={true} />
          </TabPanel>
          <TabPanel tab="Single (read-only)">
            <DatePicker date={start} readOnly={true} />
          </TabPanel>
          <TabPanel tab="Range (read-only)">
            <DatePicker dateStart={start} dateEnd={end} range={true} readOnly={true} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Output = styled.div``
DatePickerDemo.propTypes = {}
