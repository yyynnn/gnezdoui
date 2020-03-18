/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Spacer } from '../Spacer'
import { Heading } from '../Heading'
import { Text } from '../Text'

import { theme } from 'theme'

const dimensions = {
  '3XL': {
    dimension: '160px',
    text: 6
  },
  '2XL': {
    dimension: '96px',
    text: 6
  },
  XL: {
    dimension: '80px',
    text: 6
  },
  L: {
    dimension: '64px',
    text: 'lg'
  },
  M: {
    dimension: '52px',
    text: 'lg'
  },
  S: {
    dimension: '44px',
    text: 'md'
  },
  XS: {
    dimension: '32px',
    text: 'sm'
  },
  '2XS': {
    dimension: '24px',
    text: 'sm'
  }
}

export const Avatar = ({ size, image, name, ...rest }) => {
  let initialsArr = name.split(' ').map(n => {
    return n.split('')[0]
  })
  const initials = initialsArr.join().replace(',', '')
  const firstInitial = initialsArr[0]
  return (
    <Wrapper {...rest}>
      <ImgWrapper
        size={dimensions[size] ? dimensions[size] : dimensions['3XL']}
        image={image}
        name={name}
        {...rest}
        data-testid="avatar"
      >
        {!image ? (
          dimensions[size].text === 6 ? (
            <InitialsHeading>{initials}</InitialsHeading>
          ) : (
            <InitialsText size={dimensions[size].text}>{size === '2XS' ? firstInitial : initials}</InitialsText>
          )
        ) : (
          false
        )}
      </ImgWrapper>
      <Spacer space={24} />
      {dimensions[size].text === 6 ? (
        <NameHeading>{name}</NameHeading>
      ) : (
        <NameText size={dimensions[size].text}>{name}</NameText>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray.g400};
  background-image: url(${({ image }) => image});
  background-size: ${({ size }) => size.dimension};
  width: ${({ size }) => size.dimension};
  height: ${({ size }) => size.dimension};
  border-radius: 100%;
`

const InitialsText = styled(Text)`
  text-align: center;
  color: ${theme.colors.gray.primary};
`

const InitialsHeading = styled(Heading)`
  text-align: center;
  color: ${theme.colors.gray.primary};
`

const NameHeading = styled(Heading)`
  color: ${theme.colors.gray.primary};
`

const NameText = styled(Text)`
  color: ${theme.colors.gray.primary};
`

Avatar.propTypes = {
  size: PropTypes.oneOf(['3XL', '2XL', 'XL', 'L', 'M', 'S', 'XS', '2XS']),
  image: PropTypes.string,
  name: PropTypes.string.isRequired
}
