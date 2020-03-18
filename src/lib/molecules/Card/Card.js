import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Flex } from '../../atoms/Primitives/Flex/Flex'
import { Button } from '../../atoms/Button'
import { Spacer } from '../../atoms/Spacer'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Color } from '../../atoms/Color'

import { theme } from 'theme'

export const Card = ({ img, url, text, heading, button }) => {
  return (
    <Wrapper fillWidth fillHeight flex="1" data-testid="card">
      <Link href={url}>
        <Image img={img} />
        <Padding img={img}>
          <TextWrapper>
            <Head h={4}>{heading}</Head>
            <Spacer space={theme.spacings.xs2} />
            <Color color={theme.colors.gray.g300}>
              <Body>{text}</Body>
            </Color>
            <Spacer />
          </TextWrapper>
          {button && <Button type="outline">{button}</Button>}
        </Padding>
      </Link>
    </Wrapper>
  )
}

const Link = styled.a`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(Flex)``

const Padding = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${theme.colors.gray.g700};
  background-color: ${theme.colors.g700};
  padding: ${theme.spacings.s}px;
  border-radius: ${theme.radiuses.basic}px;
  border-top: 0px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${({ img }) =>
    img &&
    `
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    `};
`

const Image = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: ${theme.radiuses.basic}px;
  transition: all ${theme.transitions.basic};
  overflow: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const TextWrapper = styled.div``

const Head = styled(Heading)``

const Body = styled(Text)``

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  button: PropTypes.string
}
