import React, { useState } from 'react'
import styled from 'styled-components'

import { accordion_test_data } from './accordion_test_data'

import { Container, Row, Col, Spacer, Text, Button, Icon, Heading, Accordion, Divider } from 'lib'
import { theme } from 'theme'

export const Accordions = () => {
  return (
    <Row>
      <Col md="12">
        <Heading h={3}>L — 64 px</Heading>
        <Spacer />
        <Accordion items={accordion_test_data} />
        <Spacer />
        <Heading h={3}>M — 52 px</Heading>
        <Spacer />
        <Accordion items={accordion_test_data} size="md" />
        <Spacer />
      </Col>
    </Row>
  )
}
