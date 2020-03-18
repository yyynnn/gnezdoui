/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'

import { MultiSelectInner } from './MultiSelectInner'

const MultiDownshift = ({ onChange, onSelect, render, children = render, ...rest }) => {
  const [selectedItems, setState] = useState([])

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedItems)
    }
    if (onChange) {
      onChange(selectedItems)
    }
  }, [selectedItems])

  const stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: true
        }
      default:
        return changes
    }
  }

  const handleSelection = (selectedItem, downshift) => {
    if (selectedItems.includes(selectedItem)) {
      removeItem(selectedItem)
    } else {
      addSelectedItem(selectedItem)
    }
  }

  const removeItem = item => {
    setState(selectedItems.filter(i => i !== item))
  }
  const removeAll = () => {
    setState([])
  }
  const addSelectedItem = item => {
    setState([...selectedItems, item])
  }

  const getRemoveAllProps = ({ onClick, ...props } = {}) => {
    return {
      onClick: e => {
        onClick && onClick(e)
        e.stopPropagation()
        removeAll()
      },
      ...props
    }
  }

  const getStateAndHelpers = downshift => {
    return {
      getRemoveAllProps,
      selectedItems,
      ...downshift
    }
  }

  return (
    <Downshift stateReducer={stateReducer} selectedItem={null} onChange={handleSelection} {...rest}>
      {downshift => children(getStateAndHelpers(downshift))}
    </Downshift>
  )
}

export const MultiSelect = ({
  items,
  id,
  onChange,
  onSelect,
  selected,
  render,
  children = render,
  checkboxHandler,
  ...rest
}) => (
  <MultiDownshift onChange={onChange} itemToString={item => (item ? item.label : '')}>
    {downshift => (
      <div>
        <MultiSelectInner
          downshift={downshift}
          items={items}
          id={id}
          checkboxHandler={checkboxHandler}
          {...rest}
          selected={selected}
        />
      </div>
    )}
  </MultiDownshift>
)

MultiSelect.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  inactive: PropTypes.bool,
  items: PropTypes.array,
  checkboxHandler: PropTypes.func.isRequired,
  onChange: PropTypes.func
}
