/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from 'react'
import Downshift from 'downshift'
import PropTypes from 'prop-types'

import { SelectInner } from './SelectInner'

export const Select = React.memo(({ items, onChange, selected, id, ...rest }) => {
  const [data, setData] = useState(items)

  const stateReducer = (state, changes) => {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      // eslint-disable-next-line security/detect-non-literal-regexp
      const pattern = new RegExp(changes.inputValue, 'i')
      // eslint-disable-next-line no-magic-numbers
      const filteredItems = items.filter(item => item.label.search(pattern) > -1 || '')
      setData(filteredItems)
    }

    return changes
  }

  const handleChange = value => {
    setData(items)
    onChange && onChange(value)
  }
  return (
    <Downshift
      id={id}
      stateReducer={stateReducer}
      onChange={handleChange}
      selectedItem={selected}
      itemToString={item => (item ? item.label : '')}
    >
      {downshift => {
        return (
          <div>
            <SelectInner downshift={downshift} items={data} {...rest} />
          </div>
        )
      }}
    </Downshift>
  )
})

Select.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  tooltip: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  inactive: PropTypes.bool,
  items: PropTypes.array
}
