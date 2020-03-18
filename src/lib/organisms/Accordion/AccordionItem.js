/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from 'react'
import styled from 'styled-components'
import { UnmountClosed } from 'react-collapse'
import { If, Then, Else } from 'react-if'

import { theme } from 'theme'
import { Heading } from 'src/lib/atoms/Heading'
import { Icon } from 'src/lib/atoms/Icon/Icon'
import { Divider } from 'src/lib/atoms/Divider/Divider'
import { Spacer } from 'src/lib/atoms/Spacer'
import { Text } from 'src/lib/atoms/Text'

export const AccordionItem = ({ data, size }) => {
  const [collapsed, toggle] = useState(false)
  const IS_LG = size === 'lg' ? true : false
  const arrowAnimation = {
    transform: `rotate(${collapsed ? '-90' : '0'}deg)`,
    transition: `${theme.transitions.basic}`
  }

  return (
    <React.Fragment>
      <Spacer space={IS_LG ? theme.spacings.xs : theme.spacings.xs2} />
      <AccordionButton collapsed={collapsed} onClick={() => toggle(!collapsed)}>
        <IconWrapper>
          <Icon style={arrowAnimation} type="arrow_down" />
        </IconWrapper>
        <If condition={IS_LG}>
          <Then>
            <StyledHeading collapsed={collapsed} h={6}>
              {data.title}
            </StyledHeading>
          </Then>
          <Else>
            <StyledText collapsed={collapsed} size="lg" bold={true}>
              {data.title}
            </StyledText>
          </Else>
        </If>
      </AccordionButton>

      <UnmountClosed isOpened={collapsed}>
        <Spacer />
        <CollapseWrapper>
          <Text size="lg">{data.text}</Text>
        </CollapseWrapper>
      </UnmountClosed>
      <Spacer space={IS_LG ? theme.spacings.xs : theme.spacings.xs2} />
      <Divider horizontal={true} />
    </React.Fragment>
  )
}

const CollapseWrapper = styled.div`
  margin-left: ${theme.spacings.m}px;
`

const IconWrapper = styled.div`
  margin-right: ${theme.spacings.xs4}px;
  margin-left: ${theme.spacings.xs4}px;
`

const AccordionButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  transition: ${theme.transitions.basic};

  & svg {
    fill: ${({ collapsed }) => (collapsed ? theme.colors.blue.primary : theme.colors.black)};
    transition: ${theme.transitions.basic};
  }

  &:hover svg {
    fill: ${theme.colors.blue.hover};
  }
`

const StyledHeading = styled(Heading)`
  color: ${({ collapsed }) => (collapsed ? theme.colors.blue.primary : theme.colors.black)};
  transition: ${theme.transitions.basic};

  &:hover {
    color: ${theme.colors.blue.hover};
  }
`

const StyledText = styled(Text)`
  color: ${({ collapsed }) => (collapsed ? theme.colors.blue.primary : theme.colors.black)};
  transition: ${theme.transitions.basic};

  &:hover {
    color: ${theme.colors.blue.hover};
  }
`
