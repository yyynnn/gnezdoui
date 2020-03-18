/* eslint-disable no-magic-numbers */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'

import { Container, Row, Col } from '../Grid'

import { NavMobile } from './organisms/NavMobile'
import { NavTop } from './organisms/NavTop'
import { NavMid } from './organisms/NavMid'
import { NavBottom } from './organisms/NavBottom'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer'
import { Divider } from 'lib/atoms/Divider'

export const Navigation = ({ data, path, customTabs }) => {
  const [showRegion, setShowRegion] = useState(false)
  const [showMobMenu, setShowMobMenu] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [dropMenu, setDropMenu] = useState(null)

  useEffect(() => {
    let timer1 = setTimeout(() => setShowRegion(true), 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <React.Fragment>
      <DesktopWrapper>
        <NavTop
          data={data}
          path={path}
          showContacts={showContacts}
          setShowContacts={setShowContacts}
          showRegion={showRegion}
          setShowRegion={setShowRegion}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
        <Headroom pinStart={showRegion ? 88 : 40}>
          <NavMid data={data} dropMenu={dropMenu} setDropMenu={setDropMenu} />
        </Headroom>
        {(data.subMenu || customTabs) && (data.subMenu.length !== 0 || customTabs.length !== 0) && (
          <React.Fragment>
            <Container fluidmob>
              <Row>
                <Col md="12">
                  <NavBottom data={data} customData={customTabs} />
                </Col>
              </Row>
            </Container>
            <Divider />
          </React.Fragment>
        )}
      </DesktopWrapper>
      <MobileWrapper showMobMenu={showMobMenu}>
        <NavMobile
          data={data}
          showMobMenu={showMobMenu}
          setShowMobMenu={setShowMobMenu}
          showContacts={showContacts}
          setShowContacts={setShowContacts}
          showRegion={showRegion}
          setShowRegion={setShowRegion}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
        <Spacer spacemob={50} />
        {(data.subMenu || customTabs) && (data.subMenu.length !== 0 || customTabs.length !== 0) && (
          <React.Fragment>
            <Container fluidmob>
              <Row>
                <Col md="12">
                  <NavBottom data={data} customData={customTabs} />
                </Col>
              </Row>
            </Container>
            <Divider />
          </React.Fragment>
        )}
      </MobileWrapper>
    </React.Fragment>
  )
}
const DesktopWrapper = styled.div`
  display: none;

  .headroom--unpinned > div {
    box-shadow: none;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
`
const MobileWrapper = styled.div`
  display: block;
  pointer-events: ${({ showMobMenu }) => (showMobMenu ? 'all' : 'none')};

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`

Navigation.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  customTabs: PropTypes.array
}
