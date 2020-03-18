/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { list_data, custom_list_data } from './list_data'

import { theme } from 'theme'
import { Container, Row, Col, Heading, Spacer, List, ListItem } from 'lib'

export const Lists = () => {
  return (
    <Row>
      <Col mob="12">
        <Heading h={3}>L — 20 px font size</Heading>
        <Spacer space={theme.spacings.s} />
        <List data={list_data} size="lg" />
      </Col>

      <Col mob="12">
        <Heading h={3}>M — 16 px font size</Heading>
        <Spacer space={theme.spacings.s} />
        <List data={list_data} size="md" />
      </Col>

      <Col mob="12">
        <Heading h={3}>S — 14 px font size</Heading>
        <Spacer space={theme.spacings.s} />
        <List data={list_data} size="sm" />
      </Col>

      <Col md="12">
        <Heading h={3}>Custom</Heading>
        <Spacer space={theme.spacings.s} />

        <List size="md" listType="ul">
          {custom_list_data.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <ListItem index={idx + 1}>{item}</ListItem>
              </React.Fragment>
            )
          })}
        </List>
        <Spacer space={theme.spacings.s} />
        <List size="md" listType="ol">
          {custom_list_data.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <ListItem index={idx + 1}>
                  {item}
                  <Spacer space={theme.spacings.xs} />
                </ListItem>
              </React.Fragment>
            )
          })}
        </List>
      </Col>
    </Row>
  )
}
