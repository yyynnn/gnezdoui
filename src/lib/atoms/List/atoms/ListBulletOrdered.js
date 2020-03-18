/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { Text } from 'lib/atoms/Text/Text'

export const ListBulletOrdered = ({ className, children, size, index, custom, ...rest }) => {
  return (
    <StyledLiWrapper>
      <StyledLi className={className} {...rest}>
        <ListCounter>
          <Text size="sm">{index}</Text>
        </ListCounter>
        <StyledText size={size === 'sm' ? 'md' : size}>{children}</StyledText>
      </StyledLi>
      {!custom && <Spacer space={size === 'lg' ? theme.spacings.s : theme.spacings.xs} />}
    </StyledLiWrapper>
  )
}

const StyledLiWrapper = styled.li``

const ListCounter = styled.figure`
  border: 1.8px solid ${theme.colors.gray.g400};
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1em 0 0;
`

const StyledLi = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.primary};
`
