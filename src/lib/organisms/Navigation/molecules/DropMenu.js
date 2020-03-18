import React from 'react'
import styled from 'styled-components'

import { Divider, Button, Text, Money, Row, Col, Spacer, Container, Heading, Link } from 'lib'
import { theme } from 'theme'

export const DropMenu = ({ data, ref }) => {
  return (
    <Wrapper visible={data} ref={ref}>
      <Divider />
      <Container>
        <Spacer space={32} />
        <Row>
          <Col sm="2" />
          <Col sm="5">
            {data.links.map((link, i) =>
              // eslint-disable-next-line no-magic-numbers
              i != data.links.length - 1 ? (
                <React.Fragment key={i}>
                  <StyledLink href={link.url}>
                    <Text size={'lg'}>{link.label}</Text>
                  </StyledLink>
                  <Spacer
                    space={
                      // eslint-disable-next-line no-magic-numbers
                      i === 3 ? 28 : 16
                    }
                  />
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>
                  <Spacer space={14} />
                  <StyledLink href={link.url}>
                    <Text bold size={'sm'}>
                      {link.label}
                    </Text>
                  </StyledLink>
                </React.Fragment>
              )
            )}
          </Col>
          <Col sm="5">
            <WrapperImg>
              <Img url={data.offer.img} />
              <Spacer space={20} />
              <Heading h={5}>{data.offer.title}</Heading>
              <Spacer space={12} />
              <InfoWrapper>
                <BlockWrapper>
                  {data.offer.left_block && data.offer.left_block.type === 'money' ? (
                    <Money value={data.offer.left_block.title} />
                  ) : (
                    <Text size={'lg'}>{data.offer.left_block.title}</Text>
                  )}
                  <Spacer space={4} />
                  <SubText size={'sm'}>{data.offer.left_block.subTitle}</SubText>
                </BlockWrapper>
                <Spacer space={36} />
                <BlockWrapper>
                  {data.offer.right_block && data.offer.right_block.type === 'money' ? (
                    <Money value={data.offer.right_block.title} />
                  ) : (
                    <Text size={'lg'}>{data.offer.right_block.title}</Text>
                  )}
                  <Spacer space={4} />
                  <SubText size={'sm'}>{data.offer.right_block.subTitle}</SubText>
                </BlockWrapper>
              </InfoWrapper>
              <Spacer space={28} />
              {data.offer.button && (
                <StyledButtonLink href={data.offer.buttonUrl}>
                  <StyledButton type="secondary">
                    <Text bold size={'md'}>
                      {data.offer.button}
                    </Text>
                  </StyledButton>
                </StyledButtonLink>
              )}
            </WrapperImg>
          </Col>
        </Row>
        <Spacer space={32} />
      </Container>
    </Wrapper>
  )
}

const StyledButtonLink = styled.a`
  display: block;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const BlockWrapper = styled.div`
  width: 116px;
`

const WrapperImg = styled.div`
  width: 346px;
`
const Img = styled.div`
  height: 132px;
  border-radius: 8px;
  background: url(${({ url }) => url});
  background-position: center;
  background-size: 100%;
`
const StyledButton = styled(Button)`
  padding: ${theme.spacings.xs4}px 10px;
  border: 2px solid transparent;
`
const StyledLink = styled(Link)`
  color: ${theme.colors.black};
  transition: all ${theme.transitions.basic};

  :hover {
    color: ${theme.colors.red.primary};
  }
`
const SubText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
const Wrapper = styled.div`
  word-break: keep-all;
  z-index: -1;
  ${({ visible }) => (visible ? 'transform:translateY(0);opacity:1' : 'transform:translateY(-550px);opacity:0')};
  position: absolute;
  min-height: 64px;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid};
  transition: all ${theme.transitions.basic};
`

DropMenu.propTypes = {}
