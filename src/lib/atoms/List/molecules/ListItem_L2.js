/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { ListBulletOrdered } from '../atoms/ListBulletOrdered'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer/Spacer'

export const ListItemL2 = ({ className, elemItem, listSize }) => {
  return (
    <StyledOl>
      {elemItem.sub_elements.map((subElemItem, subElemIndex) => {
        return (
          <ListBulletOrdered key={subElemIndex} size={listSize} index={subElemIndex + 1}>
            {subElemItem.text}
          </ListBulletOrdered>
        )
      })}
      <Spacer space={listSize === 'lg' ? theme.spacings.xs : theme.spacings.xs2} />
    </StyledOl>
  )
}

const StyledOl = styled.ol`
  list-style: none;
  padding: 0;
`
