import React, { useState } from 'react'
import styled from 'styled-components'

import { Contacts } from '../molecules/Contacts'

import { Row, Col } from 'src/lib/organisms/Grid'
import { SocBlock } from 'src/lib/molecules/SocBlock/SocBlock'
import { Spacer } from 'src/lib/atoms/Spacer'
import { theme } from 'theme'

export const FooterTop = ({ contacts, socialButtons }) => {
  return (
    <React.Fragment>
      <Spacer space={20} />
      <Row>
        <Col sm="12" md="6">
          <Contacts data={contacts} />
        </Col>
        <Col sm="12" md="6">
          <SocBlockWrapper>
            <SocBlock data={socialButtons} />
          </SocBlockWrapper>
          <Spacer space={20} spacemob={24} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

const SocBlockWrapper = styled.div`
  justify-content: flex-end;
  display: flex;

  & > * {
    max-width: 400px;
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    justify-content: flex-start;
  }
`
