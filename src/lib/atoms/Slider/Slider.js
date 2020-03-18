/* eslint-disable no-magic-numbers */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import React from 'react'
import Slider from 'rc-slider'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { Borders } from './Borders/Borders'
import { Wrapper } from './styles'

import { theme } from 'theme'

const Range = Slider.Range

export const _Slider = ({
  isRange = false,
  min = 0,
  max = 100,
  disabled = false,
  borders,
  borderType = 'currency',
  currency = 'RUB',
  period = 'years',
  value,
  onChange,
  tooltip = false,
  step = 1,
  marks,
  allowCross = false,
  handleDistance = false,
  ...rest
}) => {
  return (
    <OuterWrapper>
      <Wrapper disabled={disabled} tooltip={tooltip && value} isRange={isRange} {...rest} data-testid="rangeSlider">
        {isRange ? (
          <Range
            min={min}
            max={max}
            onChange={onChange}
            value={value}
            disabled={disabled}
            step={step}
            allowCross={allowCross}
            pushable={handleDistance}
            marks={marks}
          />
        ) : (
          <Slider min={min} max={max} onChange={onChange} value={value} disabled={disabled} step={step} marks={marks} />
        )}
      </Wrapper>
      {borders && <Borders borderType={borderType} currency={currency} period={period} min={min} max={max} />}
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  /* padding-bottom: ${({ options }) => (options ? '30px' : '0px')}; */
  position: relative;
`

_Slider.propTypes = {
  isRange: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  allowCross: PropTypes.bool,
  tooltip: PropTypes.bool,
  handleDistance: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  marks: PropTypes.object,
  borders: PropTypes.bool,
  borderType: PropTypes.oneOf(['currency', 'period']),
  currency: PropTypes.string,
  period: PropTypes.oneOf(['years', 'months', 'days'])
}
