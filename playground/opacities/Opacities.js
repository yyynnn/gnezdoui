import React from 'react'

import { Colors } from '../colors/Colors'

import { theme } from 'theme'
import { Spacer, Text, Col, Row, Opacity } from 'lib'

export const Opacities = () => {
  return (
    <Row>
      {Object.keys(theme.opacities).map((opacity, i) => {
        return (
          <Col key={i} mob="2" lg="2">
            <Opacity opacity={theme.opacities[opacity]}>
              <Colors color={theme.colors.red.primary} fluid />
            </Opacity>
            <Spacer space={theme.spacings.xs4} />
            <Text>{theme.opacities[opacity]}%</Text>
            <Spacer />
          </Col>
        )
      })}
    </Row>
  )
}
