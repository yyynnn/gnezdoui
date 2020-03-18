/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import Downshift from 'downshift'
import PropTypes from 'prop-types'

import { AutoCompleteInner } from './AutoCompleteInner'

export const AutoComplete = React.memo(
  ({
    id,
    search,
    items,
    onChange,
    notFoundText = 'Ничего не найдено :(',
    onInputChange,
    initialSelected,
    loading,
    ...rest
  }) => {
    return (
      <Downshift
        id={id}
        onChange={onChange}
        initialSelectedItem={initialSelected}
        itemToString={item => (item ? item.value : '')}
      >
        {downshift => {
          return (
            <div data-testid="autocomplete">
              <AutoCompleteInner
                loading={loading}
                downshift={downshift}
                id={id}
                search={search}
                items={items}
                onChange={onChange}
                notFoundText={notFoundText}
                onInputChange={onInputChange}
                initialSelected={initialSelected}
                {...rest}
              />
            </div>
          )
        }}
      </Downshift>
    )
  }
)

AutoComplete.propTypes = {
  id: PropTypes.string,
  search: PropTypes.bool,
  items: PropTypes.array,
  onChange: PropTypes.func,
  notFoundText: PropTypes.string,
  openOnFocus: PropTypes.func,
  overflowItems: PropTypes.any,
  onInputChange: PropTypes.func,
  initialSelected: PropTypes.object,
  loading: PropTypes.bool
}
