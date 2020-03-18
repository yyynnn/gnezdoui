import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text/Text'
import { Icon } from '../Icon/Icon'

import { theme } from 'theme'

const sizeMap = {
  lg: {
    height: theme.sizes.lesser.lg,
    padding: '6px 12px',
    paddingIcon: '6px 8px 6px 12px'
  },
  md: {
    height: theme.sizes.lesser.md,
    padding: '4px 10px',
    paddingIcon: '4px 6px 4px 10px'
  },
  sm: {
    height: theme.sizes.lesser.sm,
    padding: '2px 6px',
    paddingIcon: '2px 2px 2px 6px'
  }
}

export const Tag = ({
  size = 'lg',
  disabled,
  palette = 'default',
  onRemove,
  hover = false,
  children,
  datatestid,
  ...rest
}) => {
  const close = typeof onRemove === 'function'
  const padding = close ? sizeMap[size].paddingIcon : sizeMap[size].padding
  return (
    <Wrapper disabled={disabled} tabIndex={1} size={size} padding={padding} hover={hover} palette={palette} {...rest}>
      <StyledText disabled={disabled} palette={palette} fontSize={size}>
        {children}
      </StyledText>
      {close && (
        <StyledIcon
          onClick={onRemove}
          type="close"
          size={size}
          fill={disabled || palette === 'gray' ? theme.colors.gray.g300 : theme.colors.white}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  outline: none;
  width: fit-content;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: all ${theme.transitions.basic};
  background-color: ${({ palette, disabled }) =>
    disabled ? theme.colors.gray.g700 : palette === 'default' ? theme.colors.red.primary : theme.colors.gray.g600};
  border-radius: ${theme.radiuses.basic}px;
  height: ${({ size }) => sizeMap[size].height}px;
  padding: ${({ padding }) => padding};
  ${({ disabled, hover, palette }) =>
    !disabled &&
    hover &&
    `
    :hover {
       background-color: ${palette === 'default' ? theme.colors.red.activehover : theme.colors.gray.g500};
    }
    :active {
       background-color: ${palette === 'default' ? theme.colors.red.active : theme.colors.gray.g400};
    }
  `};
`

const StyledIcon = styled(Icon)`
  height: 16px;
  margin-left: ${({ size }) => (size === 'sm' || size === 'md' ? '4px' : '8px')};
  opacity: 0.52;
`

const StyledText = styled(Text)`
  font-size: ${({ fontSize }) => (fontSize === 'lg' || fontSize === 'md' ? '14px' : '12px')};
  line-height: ${({ fontSize }) => (fontSize === 'lg' || fontSize === 'md' ? '20px' : '16px')};
  color: ${({ palette, disabled }) =>
    disabled ? theme.colors.gray.g300 : palette === 'default' ? theme.colors.white : theme.colors.black};
`

Tag.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  pallete: PropTypes.oneOf(['default', 'gray']),
  onRemove: PropTypes.func,
  hover: PropTypes.bool,
  disabled: PropTypes.bool
}
