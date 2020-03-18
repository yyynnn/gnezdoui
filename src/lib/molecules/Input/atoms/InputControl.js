/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React from 'react'
import styled from 'styled-components'
import Tippy from '@tippy.js/react'

import { Text } from '../../../atoms/Text'

import { Icon } from 'src/lib/atoms/Icon'
import { Spacer } from 'src/lib/atoms/Spacer'
import { theme } from 'theme'

export const InputControl = ({
  compRef,
  value = [],
  item,
  clearTreshold = 0,
  clear,
  pass,
  dropdown,
  onClear,
  onPassShow,
  activeHandles,
  isOpen,
  isVisible,
  size,
  ...rest
}) => {
  return (
    <ButtonsWrapper ref={compRef} {...rest}>
      {clear && (value.length > clearTreshold || !!item) && (
        <IconWrapper>
          <Icon
            type="close"
            onMouseDown={e => {
              e.preventDefault()
              onClear(e)
            }}
          />
        </IconWrapper>
      )}
      {dropdown && <RotatingIcon type="arrow_down" fill={theme.colors.gray.g300} isOpen={isOpen} />}
      {pass && (
        <IconWrapper>
          <StyledTippy
            interactive
            arrow
            maxWidth="288px"
            placement={'bottom'}
            content={<Text>{!isVisible ? 'Показать пароль' : 'Скрыть пароль'}</Text>}
          >
            <div>
              <Icon
                type={!isVisible ? 'visible' : 'invisible'}
                onMouseDown={e => {
                  e.preventDefault()
                  onPassShow(e)
                }}
              />
            </div>
          </StyledTippy>
        </IconWrapper>
      )}
    </ButtonsWrapper>
  )
}

const StyledTippy = styled(Tippy)`
  background: ${theme.colors.gray.secondary};
  padding: 12px;
  border: 0;

  &[x-placement^='bottom'] {
    .tippy-arrow {
      border-bottom-color: ${theme.colors.gray.secondary};
    }
  }
`

const IconWrapper = styled.div`
  :hover {
    svg {
      fill: ${theme.colors.gray.primary};
      transition: all ${theme.transitions.basic};
    }
  }
`

const RotatingIcon = styled(Icon)`
  transform: rotate(${({ isOpen }) => (isOpen ? '180' : '0')}deg);
  transition: ${theme.transitions.basic};
`

const ButtonsWrapper = styled.div`
  outline: none;
  appearance: none;
  background: none;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  right: 0;
  top: 0;
  padding: ${({ size }) => (size === 'lg' ? '0 16px' : '0 12px')};
  pointer-events: none;
  z-index: ${theme.z_indexes.zero};

  & svg {
    pointer-events: all;
    transition: all ${theme.transitions.basic};
    fill: ${theme.colors.gray.g300};
  }

  &:hover {
    cursor: pointer;
  }
`
