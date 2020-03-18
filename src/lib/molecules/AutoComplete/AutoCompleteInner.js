/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useCallback, useRef, useMemo } from 'react'
import styled from 'styled-components'
import { If, Then, Else } from 'react-if'
import match from 'match-sorter'
import PropTypes from 'prop-types'

import { Spacer } from '../../atoms/Spacer'
import { Icon } from '../../atoms/Icon/Icon'
import { Input } from '../Input/Input'
import { Text } from '../../atoms/Text/Text'
import { Opacity } from '../../atoms/Opacity/Opacity'
import { Dropdown } from '../../atoms/Dropdown/Dropdown'
import { InputControl } from '../Input/atoms/InputControl'

import { theme } from 'theme'
import { useClickOutside } from 'hooks/useClickOutside'

export const AutoCompleteInner = ({
  search,
  items = [],
  notFoundText,
  downshift,
  onInputChange,
  initialSelected,
  onChange,
  loading,
  ...rest
}) => {
  const {
    getInputProps,
    getItemProps,
    inputValue,
    isOpen,
    selectedItem,
    highlightedIndex,
    closeMenu,
    clearSelection
  } = downshift

  const ref = useRef()
  const filtered = useMemo(() => (inputValue === '' ? [] : match(items, inputValue, { keys: ['value'] })), [inputValue])
  const handleClear = useCallback(() => clearSelection(), [])
  const inputProps = getInputProps({
    onChange: onInputChange
  })
  const isVisible = filtered.length === 1 && filtered[0].label === inputValue && selectedItem ? false : isOpen

  useClickOutside(ref, closeMenu)

  return (
    <DownshiftWrapper search={search}>
      <Input {...inputProps} {...rest}>
        {search && <SearchIcon type="search" fill={theme.colors.gray.g300} />}
        <InputControl clear={true} item={selectedItem} onClear={handleClear} dropdown={false} />
      </Input>
      <Spacer space={8} />
      {loading && isOpen && inputValue !== '' ? (
        <Dropdown>
          <span>
            <Icon type="loader" />
          </span>
        </Dropdown>
      ) : isOpen ? (
        <Dropdown>
          <React.Fragment>
            {filtered.length > 0
              ? filtered.map((item, idx) => {
                  return (
                    <DropdownItem
                      {...getItemProps({
                        key: item.id,
                        disabled: Boolean(item.disabled),
                        index: idx,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === idx ? theme.colors.gray.g700 : null
                        }
                      })}
                    >
                      <Text size="lg" bold={highlightedIndex === idx}>
                        {item.value}
                      </Text>
                    </DropdownItem>
                  )
                })
              : inputValue && (
                  <DropdownItem>
                    <Text size="lg">{notFoundText}</Text>
                  </DropdownItem>
                )}
          </React.Fragment>
        </Dropdown>
      ) : null}
    </DownshiftWrapper>
  )
}
const SearchIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  left: 12px;
`
const DownshiftWrapper = styled.div`
  position: relative;

  input {
    text-indent: ${({ search }) => (search ? '30' : 0)}px;
  }

  span {
    padding: 10px 80px 10px 20px;
  }
`

const DropdownItem = styled.span`
  padding: ${theme.spacings.xs}px;

  &:hover {
    background-color: ${theme.colors.gray.g700};
    cursor: pointer;
  }

  & svg {
    fill: ${theme.colors.gray.primary};
    stroke: ${theme.colors.gray.primary};
    width: 20px;
    height: 20px;
  }
`

AutoCompleteInner.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
  notFoundText: PropTypes.string,
  openOnFocus: PropTypes.func,
  overflowItems: PropTypes.any,
  downshift: PropTypes.object,
  renderItem: PropTypes.func
}
