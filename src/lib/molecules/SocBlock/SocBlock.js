import React from 'react'
import styled from 'styled-components'
import { If, Else, Then } from 'react-if'
import PropTypes from 'prop-types'

import { defaults } from './defaults'

import { theme } from 'theme'
import { Icon } from 'src/lib/atoms/Icon/Icon'

export const SocBlock = ({ data = defaults, colorized = false, ...rest }) => {
  return (
    <Wrapper {...rest} data-testid="socblock">
      {data.map((item, index) => {
        return (
          <If condition={colorized} key={index}>
            <Then>
              <SocialBtn
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener"
                rel="noreferrer"
                colorized={colorized}
              >
                <FrontIconColorized type={item.img} fill={theme.colors.white} />
                <Icon type="plate" fill={item.color} />
              </SocialBtn>
            </Then>
            <Else>
              <SocialBtn key={index} href={item.link} target="_blank" rel="noopener" rel="noreferrer">
                <FrontIcon type={item.img} fill={theme.colors.gray.secondary} />
                <BackIcon />
              </SocialBtn>
            </Else>
          </If>
        )
      })}
    </Wrapper>
  )
}

const FrontIconColorized = styled(Icon)`
  position: absolute;

  & svg {
    width: 100%;
    height: auto;
  }
`

const FrontIcon = styled(Icon)`
  position: absolute;
  z-index: ${theme.z_indexes.basic};

  & svg {
    width: 100%;
  }
`

const BackIcon = styled.div`
  position: relative;
  background-color: ${theme.colors.gray.g700};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  z-index: ${theme.z_indexes.zero};

  @media (max-width: ${theme.breakpoints.sm}px) {
    width: 32px;
    height: 32px;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}px) {
    grid-gap: ${({ colorized }) => !colorized && `${theme.spacings.xs3}px`};
  }
`

const SocialBtn = styled.a`
  cursor: pointer;
  border-radius: 50%;
  transition: ${theme.transitions.basic};
  position: relative;

  &:hover {
    background-color: ${({ colorized }) => !colorized && theme.colors.gray.g600};
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    & svg {
      width: 32px;
      height: 32px;
    }
  }
`

SocBlock.propTypes = {
  data: PropTypes.array,
  colorized: PropTypes.bool
}
