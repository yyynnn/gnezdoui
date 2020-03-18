import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import { useClickOutside } from 'hooks/useClickOutside'
import { Text, theme, Icon } from 'lib'
import { useToggle } from 'hooks/useToggle'

export const SideNav = ({ data = {} }) => {
  const navList = Object.keys(data)
  const [on, toggle] = useToggle(false)
  const ref = useRef()
  const handleClose = () => {
    toggle(false)
  }

  const handleToggle = () => {
    toggle()
  }

  useClickOutside(ref, handleClose)

  return (
    <OuterWrapper on={on} ref={ref}>
      <Wrapper>
        {navList.map((item, i) => {
          return (
            <StyledItem key={i}>
              <Link
                to={item.toLocaleLowerCase()}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={200}
                isDynamic={true}
                onClick={handleClose}
              >
                <Text>{item}</Text>
              </Link>
            </StyledItem>
          )
        })}
      </Wrapper>
      <ToggleButton onClick={handleToggle}>
        <Icon type="open_right" fill="#343A40" />
      </ToggleButton>
    </OuterWrapper>
  )
}

const ToggleButton = styled.button`
  align-items: center;
  display: grid;
  justify-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

const OuterWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding-right: 0;
  z-index: ${theme.z_indexes.high};
  margin: 0;
  overflow-y: auto;
  display: flex;
  transition: ease-in-out 200ms all;
  transform: translateX(${({ on }) => (on ? '0px' : '-200px')});
`

const StyledItem = styled.div`
  /* stylelint-disable-next-line */
  padding: 4px 0;
  cursor: pointer;
  list-style: none;

  & a {
    display: block;
    transition: all ${theme.transitions.basic};
    border-bottom: 2px solid transparent;
    padding-bottom: 8px;
  }

  & .active {
    border-bottom: 2px solid ${theme.colors.red.primary};
  }
`

const Wrapper = styled.aside`
  left: 0;
  top: 0;
  background-color: ${theme.colors.gray.primary};
  color: ${theme.colors.white};
  height: 100%;
  padding: 24px;
  padding-right: 0;
  z-index: ${theme.z_indexes.high};
  margin: 0;
  width: 200px;
  overflow-y: auto;
  transition: ease-in-out 200ms all;
`
