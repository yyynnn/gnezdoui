/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Spacer, Text, Col, Row, Heading } from 'lib'

export const Spacings = () => {
  return (
    <Row>
      {Object.keys(theme.spacings).map((key, i) => {
        const value = theme.spacings[key]
        return (
          <Col key={key} lg="2">
            <SpacerColor space={value}>
              <Spacer space={value} />
            </SpacerColor>
            <Text>{value}px</Text>
          </Col>
        )
      })}
      <Col>
        <Spacer />
        <Heading h={4}>Responsive size (toggle mobile width)</Heading>
        <Spacer />
      </Col>
      {Object.keys(theme.spacings)
        .slice(4, 8)
        .map((key, i) => {
          const value = theme.spacings[key]
          return (
            <Col key={key} lg="2">
              <SpacerColor space space={value}>
                <Spacer space={value} spacemob={66} />
              </SpacerColor>
              <Text>{value}px</Text>
            </Col>
          )
        })}
    </Row>
  )
}

const SpacerColor = styled.div`
  background-color: ${theme.colors.red.primary};
  width: 100%;
  opacity: 0.5;
  border-radius: ${theme.radiuses.basic}px;
`
