import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Col, Row, Text } from 'lib'

export const SizeLegend = () => {
  return (
    <Row>
      <Col md="2">
        <StyledText size="sm">xl - 20px</StyledText>
      </Col>
      <Col md="2">
        <StyledText size="sm">lg - 16px</StyledText>
      </Col>
      <Col md="2">
        <StyledText size="sm">md - 14px</StyledText>
      </Col>
      <Col md="2">
        <StyledText size="sm">sm - 12px</StyledText>
      </Col>
    </Row>
  )
}

const StyledText = styled(Text)`
  color: ${theme.colors.gray.g300};
`
