import React from 'react'
import styled from 'styled-components'

import { useToggle } from 'hooks/useToggle'
import { theme } from 'theme'
import { Spacer } from 'src/lib/atoms/Spacer'
import { Icon } from 'src/lib/atoms/Icon/Icon'

export const Inspector = ({ children }) => {
  const [on, toggle] = useToggle(true)
  return (
    <Wrapper data-testid="inspector">
      <VisibilityButton onClick={() => toggle()}>
        <Icon type={on ? 'arrow_down' : 'arrow_up'} fill={theme.colors.white} />
      </VisibilityButton>
      {on && <Spacer />}
      {on && children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 46px;
  right: 12px;
  padding: 8px;
  background-color: ${theme.colors.gray.g500};
  border-radius: 5px;
  box-shadow: 0 0 20px -20px ${theme.colors.black};
  z-index: ${theme.z_indexes.basic};
`

const VisibilityButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  font-family: 'GNEZDO Sans';
  font-size: 12px;
  border-radius: 5px;
  background-color: ${theme.colors.gray.primary};
  outline: none;
  height: 30px;
`
