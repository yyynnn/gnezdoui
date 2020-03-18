import React, { useState } from 'react'
import styled from 'styled-components'

import { Toggle, Row, Col, Spacer, Heading } from 'lib'
import { theme } from 'theme'

const ToggleGroup = props => {
  const [checked, setCheck] = useState(true)
  const [checked_1, setCheck_1] = useState(false)
  const [checked_2, setCheck_2] = useState(true)
  const [checked_3, setCheck_3] = useState(false)
  const handler = () => {
    setCheck(!checked)
  }
  return (
    <Row>
      <Col lg="12">
        <Heading h={4}> {props.children} </Heading>
      </Col>
      <Col lg="12">
        <Heading h={4}> Построение и компоновка</Heading>
        <Spacer space={theme.spacings.xs} />
      </Col>
      <Col lg="12">
        <Spacer space={theme.spacings.xs3} />
        <DemoToggle rightText={'on'} size={props.size} checked={checked} onChange={() => setCheck(!checked)} />
        <Spacer space={theme.spacings.s} />
        <DemoToggle rightText={'on disabled'} size={props.size} disabled={true} checked={true} />
        <Spacer space={theme.spacings.s} />
        <DemoToggle
          rightText={'default'}
          size={props.size}
          checked={checked_1}
          onChange={() => setCheck_1(!checked_1)}
        />
        <Spacer space={theme.spacings.s} />
        <DemoToggle rightText={'off disabled'} size={props.size} disabled={true} checked={false} />
      </Col>
      <Col lg="4">
        <Spacer space={theme.spacings.xs3} />
        <DemoToggle
          rightText="Расчитать и отправить заявку"
          size={props.size}
          checked={checked_2}
          onChange={() => setCheck_2(!checked_2)}
        />
        <Spacer space={theme.spacings.s} />
        <DemoToggle rightText={'Повышенная ставка'} size={props.size} disabled={true} hint={'Подсказка к полю'} />
        <Spacer space={theme.spacings.s} />
        <DemoToggle
          leftText={'Рубли'}
          rightText={'Доллары'}
          size={props.size}
          biDir={true}
          checked={checked_3}
          onChange={() => setCheck_3(!checked_3)}
        />
      </Col>
    </Row>
  )
}
export const Component = styled.div``
export const ToggleDemo = () => {
  return (
    <React.Fragment>
      <Spacer space={theme.spacings.m} />
      <ToggleGroup size="md">M - 28 px</ToggleGroup>
      <Spacer space={theme.spacings.xl} />
      <ToggleGroup size="sm">S - 20 px</ToggleGroup>
      <Spacer space={theme.spacings.m} />
    </React.Fragment>
  )
}

const DemoToggle = styled(Toggle)`
  & div {
    margin-right: 8px;
  }
`

ToggleDemo.propTypes = {}
