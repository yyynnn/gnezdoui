/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { Heading } from '../../Heading'
import { Text } from '../../Text/Text'
import { Spacer } from '../../Spacer/Spacer'
import { Icon } from '../../Icon/Icon'

import { theme } from 'theme'

export const ListBulletUnordered = ({ className, children, size, custom }) => {
  return (
    <ListItemWrapper className={className}>
      <BulletWrapper size={size}>
        <Icon type="bullit" fill={theme.colors.red.primary} />
        <Spacer space={theme.spacings.xs} />
      </BulletWrapper>
      {children}
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.figure`
  display: flex;
  margin: 0;
`

const BulletWrapper = styled.div`
  display: flex;

  & ${Icon} {
    /* stylelint-disable-next-line */
    margin-top: ${({ size }) => (size === 'sm' ? 4 : 6)}px;
  }
`
