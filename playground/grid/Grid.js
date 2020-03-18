/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'
import Highlight from 'react-highlight'

import { Colors } from './../colors/Colors'

import { theme } from 'theme'
import { Container, Row, Col, Opacity, Spacer, Text, Heading } from 'lib'

const gridSize = 12

export const Grid = () => {
  return (
    <Row>
      <Col>
        <Heading h={4}>Breakpoints</Heading>
        <Spacer />
        <HighlightStyler>
          <Highlight language="javascript">{JSON.stringify(theme.breakpoints, null, ' ')}</Highlight>
        </HighlightStyler>
        <Spacer />
      </Col>
      {[...Array(gridSize).keys()].map((item, i) => {
        return (
          <Col key={i} sm="6" md="4" lg="1">
            <Opacity opacity={theme.opacities.op32}>
              <Colors color={theme.colors.red.primary} fluid>
                <GridBounds>
                  <Text>{i + 1}</Text>
                </GridBounds>
              </Colors>
            </Opacity>
            <Spacer />
          </Col>
        )
      })}
      <Col>
        <Spacer />
      </Col>
      <Col>
        <Opacity opacity={theme.opacities.op32}>
          <Colors color={theme.colors.red.primary} fluid>
            <GridBounds>
              <Text>
                1-12 Колонка без <b>пропов</b> занимает весь ряд
              </Text>
            </GridBounds>
          </Colors>
        </Opacity>
      </Col>
    </Row>
  )
}

const HighlightStyler = styled.div`
  padding: ${theme.spacings.m}px;
  background-color: ${theme.colors.gray.primary};
  color: ${theme.colors.white};
  border-radius: 4px;

  .hljs-number,
  .hljs-meta,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params {
    color: ${theme.colors.red.primary};
  }

  .hljs {
    color: ${'#ffb6b6'};
  }

  .hljs-attr {
    color: ${theme.colors.white};
  }
`

export const GridBounds = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
`
