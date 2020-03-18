import React, { useState } from 'react'

import { Col, Heading, Link, Radio, Row, Spacer } from 'lib'

export const RadioGroup = () => {
  const [isChecked1, setChecked1] = useState(true)
  const [isChecked2, setChecked2] = useState(false)
  const [isChecked3, setChecked3] = useState(true)
  const [isChecked4, setChecked4] = useState(false)

  const radioHandlerGroup = () => {
    setChecked1(!isChecked1)
    setChecked2(!isChecked2)
  }

  const radioHandlerGroup2 = () => {
    setChecked3(!isChecked3)
    setChecked4(!isChecked4)
  }

  return (
    <>
      <Heading h={4}>L - 32 px</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio size="lg" id="radioID-01" name="radio_grp_1" isChecked={isChecked1} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>
        <Col md="3">
          <Radio size="lg" id="radioID-02" name="radio_grp_1" isChecked={isChecked2} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>
      </Row>

      <Spacer />
      <Heading h={4}>M - 24 px</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio size="md" id="radioID-03" name="radio_grp_2" isChecked={isChecked1} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>
        <Col md="3">
          <Radio size="md" id="radioID-04" name="radio_grp_2" isChecked={isChecked2} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>
      </Row>

      <Spacer />
      <Heading h={4}>S - 16 px</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio size="sm" id="radioID-05" name="radio_grp_3" isChecked={isChecked1} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>

        <Col md="3">
          <Radio size="sm" id="radioID-06" name="radio_grp_3" isChecked={isChecked2} radioHandler={radioHandlerGroup}>
            Hello world
          </Radio>
        </Col>
      </Row>

      <Spacer />
      <Heading h={4}>Disabled</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio size="lg" disabled id="radioID-07" name="radio_one" isChecked={false}>
            Disabled (Not checked)
          </Radio>
        </Col>
        <Col md="3">
          <Radio size="lg" disabled id="radioID-08" name="radio_one" isChecked={true}>
            Disabled (Checked)
          </Radio>
        </Col>
      </Row>

      <Spacer />
      <Heading h={4}>With hint</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio
            hint="Useful hint"
            id="radioID-09"
            name="radio_two"
            isChecked={isChecked3}
            radioHandler={radioHandlerGroup2}
          >
            Hello world
          </Radio>
        </Col>
        <Col md="3">
          <Radio
            hint="Useful hint"
            id="radioID-10"
            name="radio_two"
            isChecked={isChecked4}
            radioHandler={radioHandlerGroup2}
          >
            Hello <Link href="https://gnezno.ru">link inside</Link> world
          </Radio>
        </Col>
      </Row>

      <Spacer />
      <Heading h={4}>With error</Heading>
      <Spacer />

      <Row>
        <Col md="3">
          <Radio error={true} errorMessage="Error message" id="radioID-01" name="radio_one" isChecked={false}>
            With error
          </Radio>
        </Col>
      </Row>
    </>
  )
}
