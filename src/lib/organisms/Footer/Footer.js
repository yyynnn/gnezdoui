import React from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import { FooterTop } from './organisms/FooterTop'
import { FooterMid } from './organisms/FooterMid'
import { FooterLow } from './organisms/FooterLow'

import { Container, Row, Col } from 'lib/organisms/Grid'
import { Divider } from 'lib/atoms/Divider/Divider'
import { theme } from 'theme'

export const Footer = ({ data }) => {
  const { contacts, social, navigation, apps, license, extra_info } = data
  return (
    <WrapperCaptain>
      <Divider />
      <Container>
        <Row>
          <Col>
            <FooterTop contacts={contacts} socialButtons={social} />
          </Col>
        </Row>
      </Container>
      <WrapperOfficer>
        <Container>
          <Row>
            <Col>
              <FooterMid navigation={navigation} />
            </Col>
          </Row>
        </Container>
        <StyledDivider />
        <Container>
          <Row>
            <Col>
              <FooterLow apps={apps} license={license} extra_info={extra_info} />
            </Col>
          </Row>
        </Container>
      </WrapperOfficer>
    </WrapperCaptain>
  )
}

const WrapperOfficer = styled.div`
  background-color: ${theme.colors.gray.g700};
`

const WrapperCaptain = styled.div``

const StyledDivider = styled(Divider)`
  @media (max-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`
