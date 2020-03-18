import React from 'react'

import { ToolTip, Col, Container, Row, Spacer, Text, Heading } from 'lib'

export const Tooltips = () => {
  return (
    <Row>
      <Col>
        <ToolTip
          hint={`Всплывающие подсказки содержат краткое описание 
                   контейнера тултипа — 288 px.`}
        >
          <Text>Сработает при наведении на знак вопроса</Text>
        </ToolTip>
        <Spacer />
      </Col>
      <Col>
        <ToolTip hint={'Small hint'} placement="right" asWrapper={true}>
          <Text>Наведи сюда, организм</Text>
        </ToolTip>
      </Col>
    </Row>
  )
}
