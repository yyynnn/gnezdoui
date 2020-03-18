import React, { useContext } from 'react'
import styled from 'styled-components'
import { If, Then, Else, When, Unless } from 'react-if'

import { ListBulletOrdered } from '../atoms/ListBulletOrdered'
import { ListBulletUnordered } from '../atoms/ListBulletUnordered'
import { ListContext } from '../List'

export const ListItem = ({ children, className, index = '' }) => {
  const listType = useContext(ListContext)
  return (
    <React.Fragment>
      <When condition={listType === 'ol'}>
        <ListBulletOrdered className={className} index={index} custom>
          {children}
        </ListBulletOrdered>
      </When>
      <When condition={listType === 'ul'}>
        <ListBulletUnordered className={className} index={index} custom>
          {children}
        </ListBulletUnordered>
      </When>
      <When condition={listType === 'default'}>
        <Wrapper className={className}>{children}</Wrapper>
      </When>
    </React.Fragment>
  )
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`
