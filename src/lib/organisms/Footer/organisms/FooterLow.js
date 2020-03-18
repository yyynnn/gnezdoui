import React from 'react'
import styled from 'styled-components'

import { Apps } from '../molecules/Apps'
import { License } from '../molecules/License'
import { ExtraInfo } from '../molecules/ExtraInfo'

import { Container, Row, Col } from 'src/lib/organisms/Grid'
import { Spacer } from 'src/lib/atoms/Spacer'
import { theme } from 'theme'

export const FooterLow = ({ apps, license, extra_info }) => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <Spacer space={32} />
        </Col>
        <Col mob="12" sm="6">
          <Apps apps={apps} />
          <License license={license} />
        </Col>
        <Col mob="12" sm="6">
          <Spacer space={0} spacemob={theme.spacings.xs4} />
          <ExtraInfo extra_info={extra_info} />
          <Spacer space={32} />
        </Col>
        <Col>
          <Spacer space={32} />
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${theme.colors.gray.g700};
`
