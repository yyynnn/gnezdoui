/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React from 'react'
import styled from 'styled-components'

import { Checkbox } from '../Checkbox'

import { Text } from 'lib/atoms/Text'
import { theme } from 'theme'

export const MultiSelectInnerItem = ({ data, initialActive, active = false }) => {
  return (
    <StyledCheckbox
      size="md"
      isChecked={active ? active : initialActive}
      name={data.label}
      noInput
      disabled={data.disabled || data.itemsCount === 0}
    >
      <Text size="lg">{data.label}</Text>
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled(Checkbox)`
  padding: 8px 16px;

  &:hover {
    background-color: ${theme.colors.gray.g700};
    cursor: pointer;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`
