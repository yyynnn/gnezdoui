import React from 'react'
import styled from 'styled-components'

import { Badge, Col, Heading, Row, Spacer, Text } from 'lib'

export const BadgeComponent = () => {
  const sizes = ['lg', 'md', 'sm']
  const renderBadge = (type, dynamic) =>
    sizes.map((size, index) => (
      <React.Fragment key={index}>
        <BudgeWrapper>
          <Badge value={0} size={size} type={type} dynamic={dynamic} />
          <Badge value={15} size={size} type={type} dynamic={dynamic} />
          <Badge value={100} size={size} type={type} dynamic={dynamic} />
          <Badge text="badge" size={size} dynamic={dynamic} />
          <Badge text="badge" outline size={size} dynamic={dynamic} />
        </BudgeWrapper>
        <Spacer />
      </React.Fragment>
    ))

  return (
    <Row>
      <Col md="12">
        <Spacer />
        <Heading h={2}>Primary</Heading>
      </Col>
      <Col>
        <Text>Статичный:</Text>
        <Spacer />
        {renderBadge()}
      </Col>
      <Col>
        <Text>Динамичный:</Text>
        <Spacer />
        {renderBadge('primary', true)}
      </Col>

      <Col md="12">
        <Spacer />
        <Heading h={2}>Secondary</Heading>
      </Col>
      <Col>
        <Text>Статичный:</Text>
        <Spacer />
        {renderBadge('secondary')}
      </Col>
      <Col>
        <Text>Динамичный:</Text>
        <Spacer />
        {renderBadge('secondary', true)}
      </Col>
    </Row>
  )
}

const BudgeWrapper = styled.div`
  & span {
    margin-right: 8px;
  }
`
