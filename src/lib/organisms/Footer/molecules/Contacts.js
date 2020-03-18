import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Heading } from 'lib/atoms/Heading'
import { Text } from 'lib/atoms/Text/Text'
import { Col, Row } from 'lib/organisms/Grid'
import { Spacer } from 'lib/atoms/Spacer/Spacer'

export const Contacts = ({ data }) => {
  return (
    <Row>
      {data.map((item, index) => {
        return (
          <Col key={index} sm="3" md="5">
            <StyledHeading h={5}>{item.number}</StyledHeading>
            <StyledText size="sm">{item.text}</StyledText>
            <Spacer space={24} samespace />
          </Col>
        )
      })}
    </Row>
  )
}

const StyledHeading = styled(Heading)`
  color: ${theme.colors.gray.primary};
`
const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
