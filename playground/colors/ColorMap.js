import React from 'react'
import styled from 'styled-components'
import { If, Then } from 'react-if'

import { Colors } from './Colors'
import { Card } from './ColorCard'

import { Spacer, Text, Heading, Col, Container, Row, theme } from 'lib'

export const ColorMap = () => {
  return (
    <Row>
      {Object.keys(theme.colors).map((key, index) => {
        return (
          <Col key={index} lg="6">
            <If condition={typeof theme.colors[key] !== 'string'}>
              <Then>
                <Heading h={2} capitalize>
                  {key}
                </Heading>
                <Card>
                  {Object.keys(theme.colors[key]).map((innerkey, innerindex) => {
                    return (
                      <Padding key={innerindex}>
                        <Colors color={theme.colors[key][innerkey]} />
                        <Spacer space={theme.spacings.xs2} />
                        <Text>{theme.colors[key][innerkey]}</Text>
                      </Padding>
                    )
                  })}
                </Card>
                <Spacer space={theme.spacings.xs2} />
              </Then>
            </If>
          </Col>
        )
      })}
    </Row>
  )
}

const Padding = styled.div`
  padding: 8px;
`
