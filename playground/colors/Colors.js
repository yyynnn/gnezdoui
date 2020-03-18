import React from 'react'
import styled from 'styled-components'

import { theme } from 'theme'

export const Colors = styled.div`
  min-height: 64px;
  width: ${({ fluid }) => (fluid ? '100%' : '64px')};
  height: ${({ fluid }) => (fluid ? '100%' : '64px')};
  background: ${({ color }) => color};
  box-shadow: ${({ color }) => color === '#FFF' && theme.shadows.basic};
  border-radius: ${theme.radiuses.basic}px;
  flex-wrap: wrap;
  cursor: pointer;
`
