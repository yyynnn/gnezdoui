import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { Link } from 'lib/atoms/Link/Link'
import { Text } from 'lib/atoms/Text/Text'
import { Icon } from 'lib/atoms/Icon/Icon'
import { Divider } from 'lib/atoms/Divider/Divider'
import { theme } from 'theme'

export const MobileDropDown = ({ title, list }) => {
  const [collapsed, toggle] = useState(false)

  const collapseHandler = () => {
    toggle(!collapsed)
  }

  return (
    <Wrapper onClick={collapseHandler}>
      <Spacer space={theme.spacings.s} />
      <WrapperFlex>
        <MobileText size="md" bold={true} collapsed={collapsed}>
          {title}
        </MobileText>
        {list && (
          <StyledIcon
            // style={arrowAnimation}
            collapsed={collapsed}
            type="arrow_up"
            fill={collapsed ? theme.colors.black : theme.colors.gray.g300}
          />
        )}
      </WrapperFlex>
      {list && (
        <Collapse isOpened={collapsed}>
          <Spacer space={theme.spacings.xs} />
          {list.map((elem, i) => {
            return (
              <React.Fragment key={i}>
                <Link link={elem.url}>
                  <StyledText size="md">{elem.label}</StyledText>
                </Link>
                <Spacer space={theme.spacings.xs2} />
              </React.Fragment>
            )
          })}
        </Collapse>
      )}
      <Spacer space={theme.spacings.s} />
      <Divider horizontal={true} />
    </Wrapper>
  )
}
const Wrapper = styled.div``

const MobileText = styled(Text)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 0 16px;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`
const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
  padding: 0 32px;
  padding-right: 16px;
`
const StyledIcon = styled(Icon)`
  & svg {
    width: 20px;
    height: 20px;
    transform: ${({ collapsed }) => (collapsed ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: ${theme.transitions.basic};
  }
  padding-right: 16px;
  margin-left: auto;
`
const WrapperFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`
