import React from 'react'
import styled, { css } from 'styled-components'

import { Flex } from '../Primitives'

import { theme } from 'theme'

const animation = css`
  animation: shine 3s infinite linear;
  background-image: linear-gradient(
    90deg,
    ${theme.colors.gray.g500} 0%,
    ${theme.colors.gray.g700} 50%,
    ${theme.colors.gray.g500} 89%
  );
  background-size: 1000%;

  @keyframes shine {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 100%;
    }
  }
`

export const SkeletonBody = styled(Flex)`
  border: ${theme.borders.basic} ${theme.colors.gray.g600};
  border-radius: ${theme.radiuses.basic}px;
  padding: 20px;
`

export const SkeletonRect = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
  border-radius: ${theme.radiuses.basic}px;
  ${animation}
  /* background-color: ${theme.colors.gray.g600}; */
`

export const SkeletonCir = styled.div`
  border-radius: ${theme.radiuses.round}px;
  min-height: ${({ height }) => height}px;
  min-width: ${({ height }) => height}px;
  max-height: ${({ height }) => height}px;
  max-width: ${({ height }) => height}px;
  ${animation}
  /* background-color: ${theme.colors.gray.g600}; */
`
