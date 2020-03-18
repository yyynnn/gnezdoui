/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'

import { Row, Tag, Col, Heading, Spacer, Flex, theme } from 'lib'

export const TagsDemo = () => {
  return ['lg', 'md', 'sm'].map((size, idx) => {
    return (
      <DemoWrapper key={idx}>
        <Flex>
          <Tag size={size} key={`${idx}1`}>
            Кредит
          </Tag>
          <Spacer space={8} />
          <Tag onRemove={() => {}} hover size={size} key={`${idx}2`}>
            Кредит
          </Tag>
          <Spacer space={8} />
          <Tag palette={'gray'} size={size} key={`${idx}3`}>
            Кредит
          </Tag>
          <Spacer space={8} />
          <Tag palette={'gray'} onRemove={() => {}} hover size={size} key={`${idx}4`}>
            Кредит
          </Tag>
          <Spacer space={8} />
          <Tag disabled size={size} key={`${idx}5`}>
            Кредит
          </Tag>
          <Spacer space={8} />
          <Tag disabled onRemove={() => {}} hover size={size} key={`${idx}6`}>
            Кредит
          </Tag>
        </Flex>
        <Spacer space={16} />
      </DemoWrapper>
    )
  })
}

const DemoWrapper = styled.div`
  & > span {
    margin-right: 24px;
  }
  margin-bottom: 24px;
`

TagsDemo.propTypes = {}
