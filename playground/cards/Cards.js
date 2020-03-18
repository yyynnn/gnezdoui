import React from 'react'
import styled from 'styled-components'

import { Col, Row, Card } from 'lib'

export const CardWithData = () => (
  <Card
    text="Краткий текстовый блок с описанием"
    heading="Плюшки"
    button="Зайти в жебу"
    url="https://gnezno.ru"
    img="https://cdn-images-1.medium.com/max/1600/1*n1JBTtq_HSWRkT2elKXU-Q.jpeg"
  />
)

export const Cards = () => {
  return (
    <Wrapper>
      <Row fillHeight>
        <Col md="3">
          <CardWithData />
        </Col>
        <Col md="3">
          <CardWithData />
        </Col>
        <Col md="3">
          <CardWithData />
        </Col>
        <Col md="3">
          <CardWithData />
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div``
