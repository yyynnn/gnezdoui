import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from 'theme'

export const ButtonGroup = ({ children, ...rest }) => {
  return (
    <Wrapper data-testid="btn_group" {...rest}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  & > * {
    border-radius: 0;
    margin-left: 1px;
    margin-right: 1px;
    border-width: 2px;
  }

  & > *:first-child {
    border-top-left-radius: ${theme.radiuses.basic}px;
    border-bottom-left-radius: ${theme.radiuses.basic}px;
    margin-right: 1px;
  }

  & > *:last-child {
    border-top-right-radius: ${theme.radiuses.basic}px;
    border-bottom-right-radius: ${theme.radiuses.basic}px;
    margin-left: 1px;
  }
`

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array])
}
