import React, { useState } from 'react'

import { Slider, Spacer, Text } from 'lib'

const min = 1000,
  max = 40000,
  initialValue = 1000
export const Sliders = () => {
  const [sliderValue, getSliderValue] = useState(initialValue)
  const [rangeValue, getRangeValue] = useState([min, max])
  /* eslint-disable no-magic-numbers */
  return (
    <div>
      <Text size="lg">Slider {sliderValue}</Text>
      <Spacer />
      <Slider
        sliderValue={sliderValue}
        step={1000}
        getSliderValue={getSliderValue}
        min={1000}
        max={1000000}
        description
      />
      <Spacer />
      <Text size="lg">RangeSlider {`${rangeValue[0]} - ${rangeValue[1]}`}</Text>
      <Spacer />
      <Slider rangeValue={rangeValue} step={1000} getRangeValue={getRangeValue} min={1000} max={1000000} isRange />
      <Spacer />
      <Text size="lg">Disabled</Text>
      <Spacer />
      <Slider disabled />
      <Spacer />
    </div>
  )
}
