/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'

import { buttons_prime, buttons_sec, buttons_outline, buttons_ghost } from './schema'

import { Container, Row, Col, Spacer, Text, Button, Icon, Heading, ButtonGroup } from 'lib'
import { theme } from 'theme'

export const Buttons = () => {
  return (
    <Row>
      <Col md="12">
        <Spacer />
        <Heading h={2}>Prime</Heading>
      </Col>
      <ButtonBlock data={buttons_prime} />
      <Spacer space={theme.spacings.xl} />
      <Col md="12">
        <Spacer />
        <Heading h={2}>Secondary</Heading>
      </Col>
      <ButtonBlock data={buttons_sec} />
      <Spacer space={theme.spacings.xl} />
      <Col md="12">
        <Spacer />
        <Heading h={2}>Outline</Heading>
      </Col>
      <ButtonBlock data={buttons_outline} />
      <Spacer space={theme.spacings.xl} />
      <Col md="12">
        <Spacer />
        <Heading h={2}>Ghost</Heading>
      </Col>
      <ButtonBlock data={buttons_ghost} />

      <Col>
        <Spacer />
        <Heading h={2}>Button Group</Heading>
        <Spacer />
        <ButtonGroup>
          <Button>Кнопка</Button>
          <Button>Кнопка</Button>
          <Button>Кнопка</Button>
          <Button>Кнопка</Button>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup>
          <Button type="secondary" size="md">
            Кнопка
          </Button>
          <Button type="secondary" size="md">
            Кнопка
          </Button>
          <Button type="secondary" size="md">
            Кнопка
          </Button>
          <Button type="secondary" size="md">
            Кнопка
          </Button>
        </ButtonGroup>
        <Spacer />
        <Text>
          Компонент как <b>div</b>
        </Text>
        <Spacer />
        <ButtonGroup>
          <Button type="outline" size="sm" as="div">
            Кнопка
          </Button>
          <Button type="outline" size="sm" as="div">
            Кнопка
          </Button>
          <Button type="outline" size="sm" as="div">
            Кнопка
          </Button>
          <Button type="outline" size="sm" as="div">
            Кнопка
          </Button>
        </ButtonGroup>
        <Spacer />
        <ButtonGroup>
          <Button disabled size="sm" as="div">
            Кнопка
          </Button>
          <Button disabled size="sm" as="div">
            Кнопка
          </Button>
          <Button disabled size="sm" as="div">
            Кнопка
          </Button>
          <Button disabled size="sm" as="div">
            Кнопка
          </Button>
        </ButtonGroup>
        <Spacer space={theme.spacings.xl} />
      </Col>
    </Row>
  )
}
const ButtonBlock = ({ data }) => {
  return Object.keys(data).map((key, i, arr) => {
    return (
      <Col key={i} lg={arr.length - i === 1 ? '4' : '2'}>
        <Text>
          Кнопка: <i>{key}</i>
        </Text>
        <Spacer />
        <ButttonWrapper>
          {data[key].map((container, i) => {
            return (
              <div key={i}>
                <Button
                  type={container.type}
                  disabled={!!container.state}
                  size={container.size}
                  dropdown={!!container.dropdown}
                  rounded={container.rounded}
                >
                  {container.icon && <Icon type={container.icon} fill={container.icon_fill} />}
                  {container.text && <span>{container.text}</span>}
                </Button>
              </div>
            )
          })}
        </ButttonWrapper>
      </Col>
    )
  })
}

const ButttonWrapper = styled.div`
  & button {
    margin-bottom: 8px;
  }
`
