import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { iconRegistry } from 'src/lib/atoms/Icon/Icon'
import { theme, Row, Col, Icon, Text, Spacer } from 'lib'

export const IconsDemo = () => {
  return (
    <Row>
      {Object.keys(iconRegistry).map(icon => (
        <Col key={icon} md="2">
          <IconWrapper>
            <Icon type={icon} fill={theme.colors.gray.primary} fileType="test" />
            <Text>{icon}</Text>
            <Spacer />
          </IconWrapper>
        </Col>
      ))}
    </Row>
  )
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`
