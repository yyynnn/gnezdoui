import React from 'react'
import styled from 'styled-components'

import { SizeLegend } from './molecules/SizeLegend'
import { data } from './dummyData'

import { Link } from 'lib/atoms/Link/Link'
import { Row, Col, Spacer, Heading, Text } from 'lib'
import { theme } from 'theme'

export const Links = () => {
  return (
    <Row>
      <Col>
        <SizeLegend />
        <Spacer space={theme.spacings.xs2} />
      </Col>
      {data.default.map((item, index) => {
        const IS_XL = item.size === 'xl' ? true : false
        const renderComp = () =>
          IS_XL ? <Heading h={6}>Гнездо Банк</Heading> : <Text size={item.size}>Гнездо Банк</Text>
        return (
          <StyledCol key={index} md="2">
            <Link href={item.link} dropdown={item.dropdown}>
              {renderComp()}
            </Link>
          </StyledCol>
        )
      })}

      <Col>
        <Spacer space={30} />
        <Heading h={4}>With Icon</Heading>
        <Spacer space={theme.spacings.s} />
        <SizeLegend />
        <Spacer space={theme.spacings.xs2} />
      </Col>
      {data.with_icon.map((item, index) => {
        const IS_XL = item.size === 'xl'
        const renderComp = () =>
          IS_XL ? <Heading h={6}>Гнездо Банк</Heading> : <Text size={item.size}>Гнездо Банк</Text>
        return (
          <StyledCol key={index} md="2">
            <Link href={item.link} dropdown={item.dropdown} type="arrow_down">
              {renderComp()}
            </Link>
          </StyledCol>
        )
      })}

      <Col>
        <Spacer space={30} />
        <Heading h={4}>As DIV</Heading>
        <Spacer space={theme.spacings.s} />
        <SizeLegend />
        <Spacer space={theme.spacings.xs2} />
      </Col>
      {data.default.map((item, index) => {
        const IS_XL = item.size === 'xl' ? true : false
        const renderComp = () =>
          IS_XL ? <Heading h={6}>XL Гнездо Банк</Heading> : <Text size={item.size}>Гнездо Банк</Text>
        return (
          <StyledCol key={index} md="2">
            <Link as="div" href={item.link} dropdown={item.dropdown}>
              {renderComp()}
            </Link>
          </StyledCol>
        )
      })}
    </Row>
  )
}

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`
