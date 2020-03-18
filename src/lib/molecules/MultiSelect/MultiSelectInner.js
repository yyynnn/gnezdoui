/* eslint-disable no-magic-numbers */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useCallback, useRef, useMemo, useState, useReducer } from 'react'
import styled from 'styled-components'
import { If, Then, Else } from 'react-if'

import { Icon } from '../../atoms/Icon/Icon'
import { Text } from '../../atoms/Text/Text'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { Spacer } from '../../atoms/Spacer'
import { Input } from '../Input'
import { InputLabel } from '../Input/atoms/InputLabel'
import { InputControl } from '../Input/atoms/InputControl'

import { MultiSelectInnerItem } from './MultiSelectInnerItem'

import { theme } from 'theme'
import { EllipsisOverflow } from 'lib/atoms/EllipsisOverflow/EllipsisOverflow'
import { Color } from 'lib/atoms/Color'

export const MultiSelectInner = ({
  items = [],
  downshift,
  id,
  errorMsg,
  error,
  label,
  tooltip,
  info,
  icon,
  checkboxHandler,
  selected,
  ...rest
}) => {
  const {
    getInputProps,
    getItemProps,
    isOpen,
    selectedItems,
    closeMenu,
    openMenu,
    inputValue,
    getRemoveAllProps
  } = downshift

  const inputProps = getInputProps({
    ...rest
  })
  const openHandler = () => (isOpen ? closeMenu() : openMenu())

  const buttonText = selectedItems.map(({ label }) => label).join(', ')

  const initAndSelected = selectedItems

  return (
    <DownshiftWrapper id={id}>
      <InputLabel label={label} tooltip={tooltip} info={info} />
      <Input hidden {...inputProps} />
      <MultiselectButton onClick={openHandler}>
        {icon && <Icon type={icon} fill={theme.colors.gray.g300} />}
        <Spacer space={theme.spacings.xs2} samespace />
        <StyledEllipsisOverflow>
          <Text size="lg" sizemob="lg">
            {selectedItems.length === 0 ? (
              <Color color={theme.colors.gray.g300}>Выберите</Color>
            ) : selectedItems.length < 4 ? (
              buttonText
            ) : (
              `Выбрано ${selectedItems.length} из ${items.length}`
            )}
          </Text>
        </StyledEllipsisOverflow>
        <InputControl
          close={true}
          dropdown={true}
          items={selectedItems}
          closeHandler={getRemoveAllProps().onClick}
          isOpen={isOpen}
        />
      </MultiselectButton>
      <Spacer space={theme.spacings.xs4} samespace />
      <If condition={isOpen}>
        <Then>
          <Dropdown>
            <If condition={!!items.length}>
              <Then>
                {() =>
                  items.map((item, index) => {
                    return (
                      <DropdownItem
                        role="option"
                        {...getItemProps({
                          key: index,
                          index,
                          item
                        })}
                      >
                        <div key={index} onClick={() => checkboxHandler(item)}>
                          <MultiSelectInnerItem
                            data={item}
                            active={selectedItems.includes(item)}
                            initialActive={selected.includes(item.id || item.value)}
                          />
                        </div>
                      </DropdownItem>
                    )
                  })
                }
              </Then>
              <Else>
                <DropdownItem>
                  <Icon type="loader" />
                </DropdownItem>
              </Else>
            </If>
          </Dropdown>
        </Then>
      </If>
      {error && <Error>{errorMsg}</Error>}
    </DownshiftWrapper>
  )
}

const StyledEllipsisOverflow = styled(EllipsisOverflow)`
  width: 70%;
`

const Error = styled(Text)`
  color: ${theme.colors.red.primary};
`

const MultiselectButton = styled.button`
  display: flex;
  align-items: center;
  pointer-events: ${({ inactive }) => inactive && 'none'};
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ disabled, error }) =>
    disabled ? theme.colors.gray.g600 : error ? theme.colors.red.primary : theme.colors.gray.g400};
  background-color: ${({ disabled }) => (disabled ? theme.colors.gray.g700 : theme.colors.white)};
  transition: ${theme.transitions.basic};
  border-radius: ${theme.radiuses.basic}px;
  height: 52px;
  outline: none;
  padding: 0 ${theme.spacings.xs}px;
  font-size: 16px;
  font-family: 'GNEZDO Sans', 'Arial', 'Helvetica', sans-serif;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  text-align: left;
`

const DownshiftWrapper = styled.div`
  position: relative;
`

const DropdownItem = styled.div``
