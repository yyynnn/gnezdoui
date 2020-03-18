/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from 'react'
import styled from 'styled-components'

import { Badge } from 'lib/atoms/Badge/Badge'
import { Text } from 'lib/atoms/Text/Text'
import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer'
import { ContextMenu } from 'lib/molecules/ContextMenu'
import { Icon } from 'lib/atoms/Icon'

const renderBadge = value => {
  return (
    <ComponentWrapper>
      <Spacer space={theme.spacings.xs3} />
      {typeof value === 'string' ? (
        <Badge type="secondary" size={'md'} text={value} />
      ) : (
        <Badge type="secondary" size={'md'} value={value} />
      )}
    </ComponentWrapper>
  )
}

const DropMenuComponent = ({ dropMenuData, label }) => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <ContextMenu data={dropMenuData}>
      <DropMenuWrapper
        onClick={() => {
          toggleOpen(!isOpen)
        }}
      >
        <TabText size="lg">{label}</TabText>
        <StyledIcon isOpen={isOpen} type="arrow_down" />
      </DropMenuWrapper>
    </ContextMenu>
  )
}

export const Tab = ({ label, tab, onChange, active, badge, dropMenu, last, to, dropMenuData }) => {
  const handleClick = e => {
    onChange(e, tab)
  }

  return (
    <React.Fragment>
      <TabItem
        onClick={!dropMenu ? handleClick : null}
        active={active}
        tabIndex="0"
        data-testid="tab"
        as={to ? 'a' : 'button'}
        href={to}
        dropMenu={dropMenu}
      >
        {dropMenu ? (
          <DropMenuComponent dropMenuData={dropMenuData} label={label} />
        ) : (
          <TabText size="lg">{label}</TabText>
        )}
        {badge ? renderBadge(badge) : null}
      </TabItem>
      {!last && <Spacer space={theme.spacings.m} />}
    </React.Fragment>
  )
}

const TabText = styled(Text)`
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  line-height: 24px;
  @media (max-width: ${theme.breakpoints.md}px) {
    width: 100%;
  }
`

const TabItem = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 0px 10px 0px;
  border: none;
  outline: none;
  /* background-color: ${theme.colors.white}; */
  color: ${({ active }) => (active ? theme.colors.gray.primary : theme.colors.gray.secondary)};
  border-bottom: ${({ active }) => (active ? `solid 2px ${theme.colors.red.primary}` : 'solid  2px transparent')};
  cursor: pointer;
  position: relative;
  transition: all ${theme.transitions.basic};

  svg {
      fill: ${theme.colors.gray.secondary};
       transition: all ${theme.transitions.basic};
    }

  &:hover {
    color: ${theme.colors.gray.primary};
    border-bottom: ${({ active }) => (!active ? `solid 2px ${theme.colors.gray.g500}` : '')};

    svg {
      fill: ${theme.colors.gray.primary};
    }
  }

  &:active {
    border-bottom: solid 2px ${theme.colors.gray.secondary};
  }

  &:focus {
    color: ${theme.colors.red.primary}; 
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    width: 100%;
    justify-content: center;
  }
`
const StyledIcon = styled(Icon)`
  transition: all ${theme.transitions.basic};
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
`
const ComponentWrapper = styled.div`
  display: flex;
  pointer-events: none;
`
const DropMenuWrapper = styled.div`
  display: flex;
`
