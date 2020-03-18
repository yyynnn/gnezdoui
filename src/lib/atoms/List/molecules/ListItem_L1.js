import React from 'react'
import styled from 'styled-components'
import { If, Then, Else, When, Unless } from 'react-if'

import { ListItemL2 } from './ListItem_L2'

import { theme } from 'theme'
import { Text } from 'lib/atoms/Text/Text'
import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { Icon } from 'lib/atoms/Icon/Icon'

export const ListItemL1 = ({ className, dataItem, listSize }) => {
  return (
    <StyledUl className={className}>
      {dataItem.elements.map((elemItem, elemIndex) => {
        const IS_SUB_ELEMENTS = elemItem.sub_elements ? true : false
        return (
          <React.Fragment key={elemIndex}>
            <ListWrapper>
              <BullitWrapper>
                <Text>—</Text>
              </BullitWrapper>
              <StyledText size={listSize === 'sm' ? 'md' : listSize}>
                {elemItem.text}
                <Spacer space={listSize === 'lg' ? theme.spacings.s : theme.spacings.xs} />
                <If condition={IS_SUB_ELEMENTS}>
                  <Then>{() => <ListItemL2 elemItem={elemItem} listSize={listSize} />}</Then>
                </If>
              </StyledText>
            </ListWrapper>
          </React.Fragment>
        )
      })}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  list-style: none;
  padding: 0 0 0 1.6em;
`

const BullitWrapper = styled.div`
  padding: 0 1em 0 0;
`

const ListWrapper = styled.li`
  display: flex;
  flex-direction: row;
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.primary};
`
