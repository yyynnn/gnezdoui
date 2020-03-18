/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'

import { Icon } from '../../atoms/Icon/Icon'
import { Input } from '../../molecules/Input/Input'
import { Text } from '../../atoms/Text/Text'
import { Opacity } from '../../atoms/Opacity/Opacity'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { InputControl } from '../Input/atoms/InputControl'

import { theme } from 'theme'
import { useClickOutside } from 'hooks/useClickOutside'
import { Flex } from 'lib/atoms/Primitives'
import { Divider } from 'lib/atoms/Divider'

export const SelectInner = props => {
  const { items, notFoundText = 'Ничего не найдено :(', downshift, renderItem } = props
  const { getInputProps, getItemProps, isOpen, selectedItem, closeMenu, setState, openMenu } = downshift

  const ref = useRef()

  const itemsView = [
    selectedItem,
    ...items.filter(item => {
      return item.value !== selectedItem.value
    })
  ]
  const handleClear = useCallback(() => setState({ inputValue: '' }), [])

  const inputProps = getInputProps({
    ...props
  })
  const openHandler = () => (isOpen ? closeMenu() : openMenu())

  useClickOutside(ref, closeMenu)

  return (
    <DownshiftWrapper>
      <Input {...inputProps}>
        <div onClick={openHandler}>
          <Flex alignItems="center">
            <InputControl clear={true} dropdown={true} item={selectedItem} onClear={handleClear} isOpen={isOpen} />
          </Flex>
        </div>
      </Input>

      {isOpen && (
        <Dropdown>
          {items.length ? (
            itemsView.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <DropdownItem
                    role="option"
                    {...getItemProps({
                      key: item.value,
                      disabled: Boolean(item.disabled),
                      isSelected: items.includes(item),
                      index: idx,
                      item
                    })}
                  >
                    <Text size="lg">
                      <Flex justify="space-between">
                        {renderItem ? renderItem(item) : item.label}
                        {item.value === selectedItem.value && <Icon type="check" />}
                      </Flex>
                    </Text>
                  </DropdownItem>
                  {item.value === selectedItem.value && <Divider />}
                </React.Fragment>
              )
            })
          ) : (
            <DropdownItem>
              <Opacity>
                <Text size="lg">{notFoundText}</Text>
              </Opacity>
            </DropdownItem>
          )}
        </Dropdown>
      )}
    </DownshiftWrapper>
  )
}

const DownshiftWrapper = styled.div`
  position: relative;
`

const DropdownItem = styled.span`
  padding: ${theme.spacings.xs}px;

  &:hover {
    background-color: ${theme.colors.gray.g700};
    cursor: pointer;
  }

  & svg {
    fill: ${theme.colors.gray.primary};
    width: 20px;
    height: 20px;
  }
`
