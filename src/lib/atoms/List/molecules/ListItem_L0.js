import React from 'react'
import styled from 'styled-components'
import { If, Then, Else, When, Unless } from 'react-if'

import { Heading } from '../../Heading'
import { Text } from '../../Text/Text'
import { Spacer } from '../../Spacer/Spacer'
import { Icon } from '../../Icon/Icon'
import { ListBulletUnordered } from '../atoms/ListBulletUnordered'

import { ListItemL1 } from './ListItem_L1'

import { theme } from 'theme'

export const ListItemL0 = ({ children, dataItem, size, ...rest }) => {
  const IS_ELEMENTS = dataItem.elements ? true : false
  const IS_SUBTEXT = dataItem.sub_text ? true : false
  const IS_LG = size === 'lg'
  return (
    <Wrapper>
      <ListBulletUnordered size={size}>
        <InnerWrapper>
          <If condition={IS_LG}>
            <Then>
              <StyledHeading>{dataItem.text}</StyledHeading>
            </Then>
            <Else>
              <StyledText size={size === 'md' ? 'lg' : 'md'}>{dataItem.text}</StyledText>
            </Else>
          </If>
          <If condition={IS_SUBTEXT}>
            <Then>
              {() => (
                <React.Fragment>
                  <StyledSubText size={size}>{dataItem.sub_text}</StyledSubText>
                  <Spacer space={IS_LG ? theme.spacings.xs3 : theme.spacings.xs4} />
                </React.Fragment>
              )}
            </Then>
          </If>
          <Spacer space={IS_LG ? theme.spacings.s : theme.spacings.xs} />
        </InnerWrapper>
      </ListBulletUnordered>
      <Spacer space={IS_LG ? theme.spacings.xs3 : theme.spacings.xs4} />

      <If condition={IS_ELEMENTS}>
        <Then>{() => <ListItemL1 dataItem={dataItem} listSize={size} />}</Then>
      </If>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`
const InnerWrapper = styled.div``

const StyledHeading = styled(Heading)`
  color: ${theme.colors.gray.primary};
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.primary};
`

const StyledSubText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
