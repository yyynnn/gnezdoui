import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text/Text'
import { Spacer } from '../Spacer/Spacer'

import { theme } from 'theme'

export const ToggleChild = ({
  biDir,
  firstChild = false,
  checked = false,
  dimension,
  size = 'md',
  hint = '',
  children
}) => {
  return (
    <ToggleChildWrapper>
      <TextWrapper biDir={biDir} firstChild={firstChild} checked={checked} size={dimension[size].text}>
        {children}
      </TextWrapper>
      {hint ? (
        <HintText hintMargin={size} size={dimension[size].hint}>
          <Spacer space={4} />
          {hint}
        </HintText>
      ) : null}
    </ToggleChildWrapper>
  )
}

const ToggleChildWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
const HintText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
const TextWrapper = styled(Text)`
  color: ${({ checked, biDir }) => (biDir ? (checked ? theme.colors.black : '#9198A0') : theme.colors.black)};
  margin-right: ${({ firstChild }) => (firstChild ? theme.spacings.xs2 : '')}px;
  line-height: ${({ size }) => (size === 'lg' ? '24' : '20')}px;
  transition: all ${theme.transitions.basic};
`
ToggleChild.propTypes = {
  firstChild: PropTypes.bool,
  checked: PropTypes.bool,
  dimension: PropTypes.object,
  size: PropTypes.string,
  hint: PropTypes.string
}
