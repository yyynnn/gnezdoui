/* eslint-disable no-magic-numbers */
import Color from 'color'

const red = '#E30611'
const blue = '#007DBB'
const orange = '#E06400'
const green = '#009A00'

export const hoverRatio = 0.12
export const activeRatio = 0.24
export const baseUnit = 4

export const darken = (color, mult) =>
  Color(color)
    .darken(mult)
    .hex()

export const theme = {
  opacities: {
    op100: 100,
    op80: 80,
    op64: 64,
    op52: 52,
    op40: 40,
    op32: 32,
    op24: 24,
    op16: 16,
    op12: 12,
    op8: 8,
    op4: 4
  },
  spacings: { xs4: 4, xs3: 8, xs2: 12, xs: 16, s: 24, m: 32, l: 40, xl: 52, xl2: 64, xl3: 80, xl4: 96 },
  font_sizes: { s: 12, md: 14, lg: 16, xl: 20, xl1: 24, xl2: 32, xl3: 48, xl4: 64 },
  colors: {
    black: '#000',
    white: '#FFF',
    gray: {
      primary: '#001424',
      secondary: '#202D3D',
      g300: '#6E7782',
      g400: '#9198A0',
      g500: '#BBC1C7',
      g600: '#E2E5EB',
      g700: '#F2F3F7'
    },
    red: {
      primary: red,
      activehover: darken(red, hoverRatio),
      active: darken(red, activeRatio)
    },
    blue: { primary: blue, hover: darken(blue, hoverRatio), active: darken(blue, activeRatio) },
    orange: {
      primary: orange,
      hover: darken(orange, hoverRatio),
      active: darken(orange, activeRatio)
    },
    green: { primary: green, hover: darken(green, hoverRatio), active: darken(green, activeRatio) },
    yellow: {
      autofill: '#FBFFC4'
    },
    transparent: 'transparent'
  },
  transitions: {
    basic: '250ms ease-in-out'
  },
  borders: {
    basic: '2px solid'
  },
  radiuses: {
    lg: (baseUnit * 3) / 2,
    basic: baseUnit,
    sm: baseUnit / 2,
    round: 5000
  },
  breakpoints: {
    none: 0,
    mob: 320,
    sm: 1024,
    md: 1280,
    lg: 1600,
    uber: 1800
  },
  z_indexes: {
    zero: 0,
    high: 99999,
    negative: -1,
    basic: 1,
    med: 5000
  },
  sizes: { lesser: { lg: 32, md: 28, sm: 20 }, greater: { lg: 52, md: 44, sm: 32 } },
  shadows: {
    basic: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    mid_basic: '0px 5px 8px rgba(0, 0, 0, 0.1)',
    mid: '0px 9px 10px rgba(0, 0, 0, 0.1)',
    mid_top: '0px 20px 30px rgba(0, 0, 0, 0.1)',
    top: '0px 30px 30px rgba(0, 0, 0, 0.1)',
    uber_top: '0px 50px 50px rgba(0, 0, 0, 0.1)'
  }
}
