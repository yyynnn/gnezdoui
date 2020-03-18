import React from 'react'
import styled from 'styled-components'
import Tippy from '@tippy.js/react'
import PropTypes from 'prop-types'

import { ContextMenuItem } from './ContextMenuItem'

import { theme } from 'theme'

export const ContextMenu = ({ children, data, placement = 'bottom-start', top_shift, ...rest }) => {
  const contextTip = (
    <StyledUl top_shift={top_shift}>
      {data.map(item => {
        return <ContextMenuItem key={item.id} data={item} />
      })}
    </StyledUl>
  )

  return (
    <WrapperOuter {...rest}>
      <StyledTippy
        animateFill={true}
        interactive
        arrow
        content={contextTip}
        flipOnUpdate={true}
        placement={placement}
        hideOnClick={true}
        trigger="click"
      >
        <Wrapper>{children}</Wrapper>
      </StyledTippy>
    </WrapperOuter>
  )
}

ContextMenu.propTypes = {
  children: PropTypes.element,
  contextTip: PropTypes.node,
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
}

const StyledTippy = styled(Tippy)`
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid_top};
  padding: 0;
  top: ${({ top_shift }) => (top_shift ? `${top_shift}px` : null)};

  &[x-placement^='top'] {
    .tippy-arrow {
      border-top-color: transparent;
    }
  }

  &[x-placement^='right'] {
    .tippy-arrow {
      border-right-color: transparent;
    }
  }

  &[x-placement^='left'] {
    .tippy-arrow {
      border-left-color: transparent;
    }
  }

  &[x-placement^='bottom'] {
    .tippy-arrow {
      border-bottom-color: transparent;
    }
  }
`

const WrapperOuter = styled.div``

const Wrapper = styled.div``

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  margin-top: ${({ top_shift }) => (top_shift ? `-${top_shift}px` : null)};
`
