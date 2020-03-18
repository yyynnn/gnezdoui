/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Row, Col, Spacer, Heading, Select, MultiSelect, Button } from 'lib'
import { theme } from 'theme'

export const data_input_items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => ({
  value: i,
  label: `Item ${i}${i + 1}`
}))
let index = 0

setInterval(() => {
  index = Math.random().toFixed(1) * 10
}, 2000)

export const Selects = props => {
  const initialSelectedItem = { value: '', label: 'Выберите значение' }
  const [selected, setSelected] = useState(data_input_items[7])
  const handler = e => {
    setSelected(data_input_items[index])
  }
  return (
    <React.Fragment>
      <Row>
        <Col md="5">
          <Heading h={3}>Regular Select</Heading>
          <Spacer space={theme.spacings.s} />
          <Select
            items={data_input_items}
            id="OE)V3Evd_2"
            label="Фамилия, имя и отчество"
            info="Вспомогательный простой текст в одну строчку"
            tooltip="Текст тултипа. Привет, человек!"
            placeholder=""
            selected={initialSelectedItem}
          />
          <Spacer space={theme.spacings.md} />
          <Heading h={3}>Controlled Select</Heading>
          <Spacer space={theme.spacings.s} />
          <Button onClick={handler}>Жмэ!</Button>
          <Select
            id="OE)V3Evd_3"
            label="Фамилия, имя и отчество"
            info="Вспомогательный простой текст в одну строчку"
            tooltip="Текст тултипа. Привет, человек!"
            placeholder=""
            items={data_input_items}
            selected={selected}
            onChange={handler}
          />
          <Spacer space={theme.spacings.md} />
          <Heading h={3}>MultiSelect</Heading>
          <Spacer space={theme.spacings.s} />
          <MultiSelect
            id="OE)V3Evdd_4"
            label="Фамилия, имя и отчество"
            info="Вспомогательный простой текст в одну строчку"
            tooltip="Текст тултипа. Привет, человек!"
            placeholder=""
            icon="list"
            items={data_input_items}
            selected={[1, 3, 6]}
            checkboxHandler={item => {
              console.log('checkbox item', item)
            }}
            // onChange={val => {
            //   setValue(val)
            // }}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

Selects.propTypes = {}
