/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import styled from 'styled-components'
import Tippy from '@tippy.js/react'
import PropTypes from 'prop-types'

import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from 'theme'

export const ToolTip = ({ children, hint, placement, asWrapper, ...rest }) => {
  const tippyContent = <HintTextWrapper>{hint}</HintTextWrapper>
  const isAsWrapper = !!asWrapper
  return (
    <ToolTipWrapper {...rest} data-testid="tooltip">
      {isAsWrapper ? false : <StyledText>{children}</StyledText>}
      <StyledTippy interactive arrow maxWidth="288px" placement={placement} content={tippyContent}>
        <InnerWrapper>
          {isAsWrapper ? <StyledText>{children}</StyledText> : false}
          <QuestionWrapper>
            <Icon type="question" />
          </QuestionWrapper>
        </InnerWrapper>
      </StyledTippy>
    </ToolTipWrapper>
  )
}

ToolTip.propTypes = {
  children: PropTypes.element,
  hint: PropTypes.node,
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
}

ToolTip.defaultProps = {
  placement: 'top'
}

const ToolTipWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`
const StyledText = styled(Text)`
  padding-right: 8px;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${theme.colors.gray.g300};

  & svg circle {
    transition: ${theme.transitions.basic};
  }

  &:hover svg circle {
    fill: ${theme.colors.gray.secondary};
  }
`
const HintTextWrapper = styled(Text)`
  word-break: normal;
`
const StyledTippy = styled(Tippy)`
  background: ${theme.colors.gray.secondary};

  &[x-placement^='top'] {
    .tippy-arrow {
      border-top-color: ${theme.colors.gray.secondary};
    }
  }

  &[x-placement^='right'] {
    .tippy-arrow {
      border-right-color: ${theme.colors.gray.secondary};
    }
  }

  &[x-placement^='left'] {
    .tippy-arrow {
      border-left-color: ${theme.colors.gray.secondary};
    }
  }

  &[x-placement^='bottom'] {
    .tippy-arrow {
      border-bottom-color: ${theme.colors.gray.secondary};
    }
  }
`
