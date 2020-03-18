import React from 'react'
import styled from 'styled-components'

import { Icon, Spacer, Row, Col, Text, Button, Tag, Container } from 'lib'
import { theme } from 'theme'

export const RegionCheck = ({ visible, okHandler, noHandler, ...rest }) => {
  return (
    <React.Fragment>
      <WrapperDesktop visible={visible} {...rest}>
        <Row>
          <Col sm="12">
            <Container>
              <Spacer space={8} />
              <Wrapper>
                <StyledText>Ваш регион Москва и Московская область</StyledText>
                <Spacer space={32} />
                <StyledTag hover onClick={okHandler} size={'lg'}>
                  Да, верно
                </StyledTag>
                <Spacer space={16} />
                <StyledText click={true} onClick={noHandler}>
                  Нет, другой
                </StyledText>
              </Wrapper>
              <Spacer space={8} />
            </Container>
          </Col>
        </Row>
      </WrapperDesktop>
      <WrapperMobile visible={visible}>
        <Text bold>
          Ваш регион <br />
          Москва и Московская область
        </Text>
        <Spacer space={32} />
        <Row>
          <Col mob="6">
            <StyledTag hover onClick={okHandler} size={'lg'}>
              Да, верно
            </StyledTag>
          </Col>
          <Col mob="6">
            <StyledText onClick={noHandler}>Нет, другой</StyledText>
          </Col>
        </Row>
      </WrapperMobile>
    </React.Fragment>
  )
}
const WrapperMobile = styled.div`
  pointer-events: auto;
  position: fixed;
  padding: 16px;
  display: block;
  bottom: ${({ visible }) => (visible ? '0' : '-120px')};
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
  width: 100%;
  transition: all ${theme.transitions.basic};
  box-shadow: ${({ visible }) => (visible ? '0px 4px 12px rgba(0, 0, 0, 0.15)' : '')};
  background-color: ${theme.colors.white};
`
const WrapperDesktop = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
  transition: all ${theme.transitions.basic};
  z-index: 0;
  ${({ visible }) => (visible ? 'margin-top: 0px;opacity: 1' : 'margin-top: -50px; opacity:0')};
  background-color: ${theme.colors.white};
`
const StyledText = styled(Text)`
  line-height: 20px;
  cursor: pointer;
`
const StyledTag = styled(Tag)`
  border-radius: ${theme.radiuses.basic}px;

  > div {
    line-height: 32px;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

RegionCheck.propTypes = {}
