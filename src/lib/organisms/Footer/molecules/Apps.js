import React from 'react'
import styled from 'styled-components'

import { Button, Icon } from 'lib'
import { Row, Col } from 'lib/organisms/Grid'
import { theme } from 'theme'
import { Text } from 'lib/atoms/Text/Text'
import { Spacer } from 'lib/atoms/Spacer/Spacer'

export const Apps = ({ apps }) => {
  return (
    <Row>
      <Col md="12">
        <Row>
          {apps.map((item, index) => {
            return (
              <Col sm="4" key={index}>
                <CustomLink href={item.link}>
                  <StyledButton type="secondary" size="md" fluid={true}>
                    <Icon type={item.img} fill={theme.colors.gray.secondary} stroke="transparent" />
                    <Text bold={true} size="md">
                      {item.name}
                    </Text>
                  </StyledButton>
                </CustomLink>
                <Spacer space={theme.spacings.m} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

const CustomLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`
