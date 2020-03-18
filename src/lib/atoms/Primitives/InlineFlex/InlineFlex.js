import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Inner = styled.div`
  display: inline-flex;
  flex: ${({ flex = 'unset' }) => flex};
  justify-content: ${({ justify = 'unset' }) => justify};
  align-content: ${({ alignContnent = 'unset' }) => alignContnent};
  align-items: ${({ alignItems = 'unset' }) => alignItems};
  flex-wrap: ${({ wrap = 'unset' }) => wrap};
  align-self: ${({ self = 'unset' }) => self};
  height: ${({ fillHeight = false }) => (fillHeight ? '100%' : 'unset')};
  width: ${({ fillWidth = false }) => (fillWidth ? '100%' : 'unset')};
  flex-direction: ${({ direction = 'unset' }) => direction};
`

export const InlineFlex = ({ ...rest }) => {
  return <Inner data-testid="inlineflexbox" {...rest} />
}

InlineFlex.propTypes = {
  justify: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  wrap: PropTypes.string,
  flex: PropTypes.string,
  self: PropTypes.string,
  fillHeight: PropTypes.bool,
  direction: PropTypes.string,
  fillWidth: PropTypes.bool
}
