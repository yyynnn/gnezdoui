import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Flex } from '../Primitives'

import { theme } from 'theme'

export const Hider = ({ children, at = theme.breakpoints.sm, reverse = false, ...rest }) => {
  return (
    <HiderWrapper at={at} reverse={reverse} {...rest}>
      {children}
    </HiderWrapper>
  )
}

export const HiderWrapper = styled(Flex)`
  display: ${({ reverse }) => (!reverse ? 'none' : 'flex')};

  @media (min-width: ${({ at }) => at}px) {
    display: ${({ reverse }) => (!reverse ? 'flex' : 'none')};
  }
`

Hider.propTypes = { at: PropTypes.number, reverse: PropTypes.bool, children: PropTypes.any }
