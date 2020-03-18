import React from 'react'
import styled from 'styled-components'

import { Color, Text, theme, Heading, Spacer } from 'lib'

export const ColorDemo = ({ data }) => {
  return (
    <Color color={theme.colors.red.primary}>
      <Text>Этот текст будет красным</Text>
    </Color>
  )
}
