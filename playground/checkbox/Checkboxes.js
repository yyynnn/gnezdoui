import React, { useState } from 'react'

import { Container, Row, Col, Checkbox } from 'lib'

export const Checkboxes = () => {
  const [isChecked1, setChecked1] = useState(false)
  const [isChecked2, setChecked2] = useState(true)
  const [isChecked3, setChecked3] = useState(false)
  const [isChecked4, setChecked4] = useState(true)
  const [isChecked5, setChecked5] = useState(true)

  const checkboxHandler1 = () => {
    console.log('here')
    setChecked1(!isChecked1)
  }
  const checkboxHandler2 = () => {
    setChecked2(!isChecked2)
  }
  const checkboxHandler3 = () => {
    setChecked3(!isChecked3)
  }
  const checkboxHandler4 = () => {
    setChecked4(!isChecked4)
  }
  const checkboxHandler5 = () => {
    setChecked5(!isChecked5)
  }

  return (
    <Row>
      <Col md="3">
        <Checkbox
          size="sm"
          disabled
          onChange={checkboxHandler4}
          isChecked={isChecked4}
          hint="Useful hint"
          name="My beloved checkbox"
        >
          Disabled
        </Checkbox>
      </Col>

      <Col sm="3">
        <Checkbox size="sm" onChange={checkboxHandler1} isChecked={isChecked1} name="My beloved checkbox">
          Hello world
        </Checkbox>
      </Col>
      <Col sm="3">
        <Checkbox size="sm" onChange={checkboxHandler2} isChecked={isChecked2} name="My beloved checkbox">
          Hello world
        </Checkbox>
      </Col>

      <Col md="3">
        <Checkbox
          size="sm"
          onChange={checkboxHandler1}
          isChecked={isChecked1}
          hint="Useful hint"
          name="My beloved checkbox"
        >
          Hello <a href="https://gnezno.ru">link inside</a> world
        </Checkbox>
      </Col>

      <Col md="3">
        <Checkbox
          size="md"
          error={true}
          onChange={checkboxHandler3}
          isChecked={isChecked3}
          name="My beloved checkbox"
          errorMessage="Error description"
        >
          Required
        </Checkbox>
      </Col>

      <Col md="3">
        <Checkbox size="md" onChange={checkboxHandler5} isChecked={isChecked5} name="My beloved checkbox" indeterminate>
          Indeterminate
        </Checkbox>
      </Col>
    </Row>
  )
}
