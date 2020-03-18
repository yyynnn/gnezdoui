import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { Link } from 'lib/atoms/Link/Link'
import { Text } from 'lib/atoms/Text/Text'
import { Icon } from 'lib/atoms/Icon/Icon'
import { Divider } from 'lib/atoms/Divider/Divider'

export const MobileList = ({ title, list }) => {
  const [collapsed, toggle] = useState(false)
  const arrowAnimation = {
    transform: `rotate(${collapsed ? '0' : '-90'}deg)`,
    transition: `${theme.transitions.basic}`
  }
  return (
    <React.Fragment>
      <Spacer space={theme.spacings.xs} />
      <MobileText size="md" bold={true} collapsed={collapsed} onClick={() => toggle(!collapsed)}>
        <IconWrapper>
          <Icon
            style={arrowAnimation}
            type="arrow_down"
            fill={collapsed ? theme.colors.black : theme.colors.gray.g300}
          />
        </IconWrapper>
        {title}
      </MobileText>
      <Collapse isOpened={collapsed}>
        <Spacer space={theme.spacings.xs} />
        {list.map((elem, e) => {
          return (
            <React.Fragment key={e}>
              <Link link={elem.link}>
                <StyledText size="md">{elem.name}</StyledText>
              </Link>
              <Spacer space={theme.spacings.xs2} />
            </React.Fragment>
          )
        })}
      </Collapse>
      <Spacer space={theme.spacings.xs} />
      <Divider horizontal={true} />
    </React.Fragment>
  )
}

const MobileText = styled(Text)`
  display: none;

  @media (max-width: ${theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`
const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
  padding-left: 2.6em; /* временное решение */
`
const IconWrapper = styled.div`
  margin-right: ${theme.spacings.xs4}px;
`
