import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import {
  Col,
  Container,
  ContextMenu,
  Heading,
  Icon,
  Row,
  Spacer,
  Tab,
  Tabs,
  TabPanel,
  Text,
  TabPanels,
  TabsBar,
  Link
} from 'lib'
import { useClickOutside } from 'hooks/useClickOutside'

const dropMenuData = [
  {
    id: 100,
    text: 'Сервисы',
    link: 'https://www.gnezno.ru/loans/cash-loan/'
  },
  {
    id: 101,
    text: 'Платежи и переводы',
    link: 'https://www.gnezno.ru/loans/cash-loan/'
  },
  {
    id: 102,
    text: 'Всякое разное',
    link: 'https://www.gnezno.ru/loans/cash-loan/'
  },
  {
    id: 103,
    text: 'Всякое разное',
    link: 'https://www.gnezno.ru/loans/cash-loan/'
  }
]

const Label = ({ tab, open, onClick }) => {
  return (
    <LabelWrapper onClick={onClick}>
      <Text>{tab}</Text>
      <Icon type="more" />
    </LabelWrapper>
  )
}

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;

  & i {
    & svg {
      fill: ${theme.colors.gray.secondary};

      &:hover {
        fill: ${theme.colors.gray.primary};
      }

      &:active {
        fill: ${theme.colors.gray.primary};
      }
    }
  }
`

const MenuWrapper = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  list-style: none;
  align-items: start;
  position: absolute;
  top: ${theme.spacings.l}px;
  padding: 8px 16px;
  background: ${theme.colors.white};
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 0px 8px rgba(0, 0, 0, 0.12);
  border-radius: ${theme.radiuses.basic}px;
  min-width: 248px;
  z-index: 999;
`

const ItemWrapper = styled.li`
  padding: 24px 16px;
`

export const TabsDemo = () => {
  const [tab, setTab] = useState('dogs')
  const handleChange = (event, tab) => {
    setTab(tab)
  }

  return (
    <Row>
      <Col md="4">
        <Spacer />
        <Heading h={2}>Default</Heading>

        <Spacer />
      </Col>
      <Col md="12">
        <Tabs tab={tab}>
          <TabsBar onChange={handleChange}>
            <Tab tab="dogs" label="Собаки" />
            <Tab tab="cats" label="Коты" />
            <Tab tab="fish" label="Рыбы" />
            <Tab tab="pigs" label="Свиньи" />
          </TabsBar>
          <TabPanels>
            <TabPanel tab="dogs">
              <Text>Собаки так себе</Text>
            </TabPanel>
            <TabPanel tab="cats">
              <Text>Коты норм</Text>
            </TabPanel>
            <TabPanel tab="fish">
              <Text>Рыба пресная</Text>
            </TabPanel>
            <TabPanel tab="pigs">
              <Text>А свиньи вообще отличная тема</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Col>

      <Col md="12">
        <Col md="4">
          <Spacer />
          <Heading h={2}>С разделителем</Heading>
          <Spacer />
        </Col>

        <Tabs tab={tab}>
          <TabsBar onChange={handleChange} withDivider>
            <Tab tab="dogs" label="Собаки" />
            <Tab tab="cats" label="Коты" />
            <Tab tab="fish" label="Рыбы" />
            <Tab tab="pigs" label="Свиньи" />
          </TabsBar>
          <TabPanels>
            <TabPanel tab="dogs">
              <Text>Собаки так себе</Text>
            </TabPanel>
            <TabPanel tab="cats">
              <Text>Коты норм</Text>
            </TabPanel>
            <TabPanel tab="fish">
              <Text>Рыба пресная</Text>
            </TabPanel>
            <TabPanel tab="pigs">
              <Text>А свиньи вообще отличная тема</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Col>
      <Col md="4">
        <Spacer />
        <Heading h={2}>Badge</Heading>
      </Col>
      <Col md="12">
        <Tabs tab={tab}>
          <TabsBar onChange={handleChange}>
            <Tab tab="dogs" label="Собаки" badge={7} />
            <Tab tab="cats" label="Коты" badge="Двойной хвост" />
            <Tab tab="fish" label="Рыбы" />
            <Tab tab="pigs" label="Свиньи" />
          </TabsBar>
          <TabPanels>
            <TabPanel tab="dogs">
              <Text>Собаки так себе</Text>
            </TabPanel>
            <TabPanel tab="cats">
              <Text>Коты норм</Text>
            </TabPanel>
            <TabPanel tab="fish">
              <Text>Рыба пресная</Text>
            </TabPanel>
            <TabPanel tab="pigs">
              <Text>А свиньи вообще отличная тема</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Col>

      <Col md="12">
        <Spacer />
        <Heading h={2}>DropMenu</Heading>

        <Spacer />
      </Col>
      <Col md="12">
        <Tabs tab={tab}>
          <TabsBar onChange={handleChange}>
            <Tab tab="dogs" label="Собаки" />
            <Tab tab="cats" label="Коты" badge={1024} />
            <Tab tab="fish" label="Рыбы" />
            <Tab tab="more" label="Ещё" dropMenu dropMenuData={dropMenuData} />
          </TabsBar>
          <TabPanels>
            <TabPanel tab="dogs">
              <Text>Собаки так себе</Text>
            </TabPanel>
            <TabPanel tab="cats">
              <Text>Коты норм</Text>
            </TabPanel>
            <TabPanel tab="fish">
              <Text>Рыба пресная</Text>
            </TabPanel>
            <TabPanel tab="more" />
          </TabPanels>
        </Tabs>
      </Col>
    </Row>
  )
}
