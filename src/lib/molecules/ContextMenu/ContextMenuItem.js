import React from 'react'
import styled from 'styled-components'

import { Text } from 'lib/atoms/Text'
import { theme } from 'theme'

export const ContextMenuItem = ({ data, ...rest }) => {
  return (
    <StyledLi {...rest}>
      {data.link ? (
        <StyledA href={data.link}>
          <StyledText>{data.text}</StyledText>
        </StyledA>
      ) : (
        <StyledText>{data.text}</StyledText>
      )}
    </StyledLi>
  )
}

const StyledText = styled(Text)`
  padding: 16px;
`

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.gray.primary};
`

const StyledLi = styled.li`
  text-align: left;

  &:hover {
    background-color: ${theme.colors.gray.g700};
  }
`
