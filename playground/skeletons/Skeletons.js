import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { SkeletonRect, SkeletonBody, SkeletonCir } from 'lib/atoms/Skeleton/Skeleton'
import { theme, Spacer, Flex, Row, Col } from 'lib'

export const Skeletons = () => {
  return (
    <Row>
      <Col md="3">
        <Skeleton />
      </Col>
      <Col md="3">
        <Skeleton />
      </Col>
      <Col md="3">
        <Skeleton />
      </Col>
      <Col md="3">
        <Skeleton />
      </Col>
    </Row>
  )
}

const Skeleton = () => {
  return (
    <SkeletonBody wrap="wrap">
      <Flex fillWidth alignItems="center">
        <SkeletonCir height={theme.spacings.m} />
        <Spacer space={theme.spacings.xs2} />
        <SkeletonRect height={theme.spacings.xs2} />
      </Flex>
      <Spacer />
      <Flex fillWidth alignItems="center">
        <SkeletonCir height={theme.spacings.m} />
        <Spacer space={theme.spacings.xs2} />
        <SkeletonRect height={theme.spacings.xs2} />
      </Flex>
      <Spacer />
      <SkeletonRect height={theme.spacings.s} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
      <SkeletonRect height={theme.spacings.xs3} />
      <Spacer space={theme.spacings.xs2} />
    </SkeletonBody>
  )
}
