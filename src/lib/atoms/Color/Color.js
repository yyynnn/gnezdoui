import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from 'theme'

export const Inner = styled.div`
  color: ${({ color }) => (color ? color : theme.colors.gray.primary)};
`

export const Color = ({ color, ...rest }) => <Inner color={color} {...rest} data-testid="color" />

Color.propTypes = { color: PropTypes.string.isRequired }
