import React from 'react'
import styled from 'styled-components'

import { Avatar, Col, Row, Spacer, Text } from 'lib'
import { theme } from 'theme'

const img = 'https://cdn1.savepice.ru/uploads/2019/7/15/64a86751edd49f6741cac55c09ff95f6-full.png'

const list = [
  [
    <Avatar name="Йобама Кеанос" size="3XL" />,
    <Avatar name="Йобама Кеанос" size="2XL" />,
    <Avatar name="Йобама Кеанос" size="XL" />,
    <Avatar name="Йобама Кеанос" size="L" />,
    <Avatar name="Йобама Кеанос" size="M" />,
    <Avatar name="Йобама Кеанос" size="S" />,
    <Avatar name="Йобама Кеанос" size="XS" />,
    <Avatar name="Йобама Кеанос" size="2XS" />
  ],
  [
    <Avatar name="Тарас Обамос" size="3XL" image={img} />,
    <Avatar name="Тарас Обамос" size="2XL" image={img} />,
    <Avatar name="Тарас Обамос" size="XL" image={img} />,
    <Avatar name="Тарас Обамос" size="L" image={img} />,
    <Avatar name="Тарас Обамос" size="M" image={img} />,
    <Avatar name="Тарас Обамос" size="S" image={img} />,
    <Avatar name="Тарас Обамос" size="XS" image={img} />,
    <Avatar name="Тарас Обамос" size="2XS" image={img} />
  ]
]

const description = [
  ['3XL', '160px'],
  ['2XL', '96px'],
  ['XL', '80px'],
  ['L', '64px'],
  ['M', '52px'],
  ['S', '44px'],
  ['XS', '32px'],
  ['2XS', '24px']
]

export const Avatars = () => {
  return (
    <Row>
      <Col md="1">
        {description.map((item, id) => {
          const measure = item[0]
          const size = item[1]
          return (
            <React.Fragment key={id}>
              <Wrapper height={size}>
                <MeasureText>{measure}</MeasureText>
              </Wrapper>
              <Spacer space={32} />
            </React.Fragment>
          )
        })}
      </Col>
      <Col md="1">
        {description.map((item, id) => {
          const size = item[1]
          return (
            <React.Fragment key={id}>
              <Wrapper height={size}>
                <SizeText size="sm">{size}</SizeText>
              </Wrapper>
              <Spacer space={32} />
            </React.Fragment>
          )
        })}
      </Col>
      <Col md="4">
        {list[0].map((item, id) => {
          return (
            <React.Fragment key={id}>
              {item}
              <Spacer space={32} />
            </React.Fragment>
          )
        })}
      </Col>
      <Col md="4">
        {list[1].map((item, id) => {
          return (
            <React.Fragment key={id}>
              {item}
              <Spacer space={32} />
            </React.Fragment>
          )
        })}
      </Col>
    </Row>
  )
}

const Wrapper = styled.div`
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
`

const MeasureText = styled(Text)`
  color: ${theme.colors.gray.primary};
`

const SizeText = styled(Text)`
  color: ${theme.colors.gray.g300};
`
