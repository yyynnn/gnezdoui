/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable no-magic-numbers */

import React from 'react'
import styled from 'styled-components'

import { Text } from 'src/lib/atoms/Text'
import { Spacer } from 'src/lib/atoms/Spacer'
import { ToolTip } from 'src/lib/atoms/ToolTip'
import { theme } from 'theme'

export const InputLabel = ({ label, tooltip, info }) => {
  return (
    <Wrapper>
      {label && (
        <Label>
          {tooltip ? (
            <ToolTip hint={tooltip}>
              <Text bold size="md">
                {label}
              </Text>
            </ToolTip>
          ) : (
            <Text bold size="md">
              {label}
            </Text>
          )}
        </Label>
      )}
      {info && (
        <React.Fragment>
          <Info>
            <Text size="md">{info}</Text>
          </Info>
          <Spacer space={theme.spacings.xs3} />
        </React.Fragment>
      )}
      <Spacer space={theme.spacings.xs3} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Info = styled.u`
  text-decoration: none;
  color: ${theme.colors.gray.secondary};
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`
