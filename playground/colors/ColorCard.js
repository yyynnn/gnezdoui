import React from 'react'
import styled from 'styled-components'

export const Card = ({ children, text }) => {
  return (
    <div>
      <InnerWrapper>{children}</InnerWrapper>
      {text}
    </div>
  )
}

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
