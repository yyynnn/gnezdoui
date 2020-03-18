import React from 'react'
import styled from 'styled-components'

import { Colors } from '../colors/Colors'

import { theme } from 'theme'
import { Spacer, Text, Heading, Col, Container, Row, Money } from 'lib'

export const MoneyDemo = () => {
  return (
    <Row>
      <Col lg="6">
        <Heading>GNEZDO Sans</Heading>
        <Spacer />
        <Money value="12345" />
        <Money value="1245.00" />
        <Money value="12345.67" currency="EUR" />
        <Money value="12345.999" currency="EUR" />
      </Col>
      <Col lg="6">
        <Heading h={3}>GNEZDO Sans</Heading>
        <Spacer />
        <Money value="12345" heading />
        <Money value="1245.00" heading />
        <Money value="12345.67" heading currency="EUR" />
        <Money value="12345.999" heading currency="EUR" />
      </Col>
    </Row>
  )
}
