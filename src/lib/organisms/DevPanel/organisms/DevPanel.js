/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'

import { SpacerGolbalStyles } from '../atoms/SpacerGolbalStyles'

import { Inspector } from './Inspector'

import { Checkbox } from 'src/lib/molecules/Checkbox/Checkbox'
import { useToggle } from 'hooks/useToggle'

export const DevPanel = ({ dev, defOn = true, ...rest }) => {
  const [on, toggle] = useToggle(defOn)

  return dev ? (
    <React.Fragment>
      <Inspector {...rest}>
        <Checkbox size="sm" isChecked={on} checkboxHandler={() => toggle()}>
          Показать спейсеры
        </Checkbox>
      </Inspector>
      {on && <SpacerGolbalStyles />}
    </React.Fragment>
  ) : (
    <React.Fragment />
  )
}

DevPanel.propTypes = {
  dev: PropTypes.bool.isRequired
}
