/* eslint-disable import/named */
/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// Type definitions for /src/theme/index.js
// Project: gneznoui

export declare var red: string
export declare var blue: string
export declare var orange: string
export declare var green: string
export declare var hoverRatio: number
export declare var activeRatio: number
export declare var baseUnit: number

/**
 *
 * @param color: string
 * @param mult: number
 */
export declare function darken(color: string, mult: number): void

/** uikit theme */
declare interface IThemeInterface {
  opacities: {
    op100: number
    op80: number
    op64: number
    op52: number
    op40: number
    op32: number
    op24: number
    op16: number
    op12: number
    op8: number
    op4: number
  }
  spacings: {
    /** xs4 = 4px */
    xs4: number
    /** xs3 = 8px */
    xs3: number
    /** xs2 = 12px */
    xs2: number
    /** xs = 16px */
    xs: number
    /** s = 24px */
    s: number
    /** m = 32px */
    m: number
    /** l = 40px */
    l: number
    /** xl = 52px */
    xl: number
    /** xl2 = 64px */
    xl2: number
    /** xl3 = 80px */
    xl3: number
    /** xl4 = 96px */
    xl4: number
  }

  colors: {
    /** #fff */
    white: string
    /** #000 */
    black: string
    gray: {
      /** #343A40 */
      primary: string
      /** #666C72 */
      secondary: string
      /** #ADB5BD */
      g300: string
      /** #CED4DA */
      g400: string
      /** #DEE2E6 */
      g500: string
      /** #E9ECEF */
      g600: string
      /** #F6F7F8 */
      g700: string
    }
    red: {
      primary: string
    }
    blue: {
      primary: string
    }
    orange: {
      primary: string
    }
    green: {
      primary: string
    }
  }

  transitions: {
    /** 250ms ease-in-out */
    basic: string
  }

  borders: {
    /** 2px solid */
    basic: string
  }

  radiuses: {
    /** 12 */
    lg: number
    /** baseUnit = 8 */
    basic: number
    /** 4 */
    sm: number
    /** 5000 */
    round: number
  }

  breakpoints: {
    /** 0 */
    none: number
    /** 320 */
    mob: number
    /** 1024 */
    sm: number
    /** 1280 */
    md: number
    /** 1360 */
    lg: number
    /** 1800 */
    uber: number
  }

  z_indexes: {
    /** 0 */
    zero: number
    /** 99999 */
    high: number
    /** -1 */
    negative: number
    /** 1 */
    basic: number
    /** 5000 */
    med: number
  }

  sizes: {
    lesser: {
      /** 32 */
      lg: number
      /** 28 */
      md: number
      /** 20 */
      sm: number
    }
    greater: {
      /** 52 */
      lg: number
      /** 44 */
      md: number
      /** 32 */
      sm: number
    }
  }

  shadows: {
    /** '0px 2px 4px rgba(0, 0, 0, 0.1)' */
    basic: string
    /** '0px 5px 8px rgba(0, 0, 0, 0.1)' */
    mid_basic: string
    /** '0px 9px 10px rgba(0, 0, 0, 0.1)' */
    mid: string
    /** '0px 20px 30px rgba(0, 0, 0, 0.1)' */
    mid_top: string
    /** '0px 30px 30px rgba(0, 0, 0, 0.1)' */
    top: string
    /** '0px 50px 50px rgba(0, 0, 0, 0.1) */
    uber_top: string
  }
}

declare module 'gneznoui' {
  // Atoms
  // eslint-disable-next-line import/order
  import {
    Spacer,
    Color,
    Icon,
    Text,
    Heading,
    Opacity,
    Divider,
    ToolTip,
    Link,
    Toggle,
    Money,
    Badge,
    Tag,
    List,
    SkeletonRect,
    SkeletonBody,
    SkeletonCir,
    Hider,
    Dropdown,
    EllipsisOverflow,
    RangeSlider,
    ListItem,
    Button,
    ButtonGroup,
    Radio,
    Avatar
  } from '../src/lib/atoms'

  // Molecules
  import {
    Checkbox,
    ContextMenu,
    SocBlock,
    AutoComplete,
    Search,
    Select,
    MultiSelect,
    InputControl,
    Input,
    InputLabel,
    AttachArea,
    ConfirmationField,
    InlineEdit
  } from '../src/lib/molecules'

  // Organisms
  import { Accordion } from '../src/lib/organisms'

  // Date picker group
  import { DatePicker, FullDate, Month, Year } from '../src/lib/organisms/DatePicker'

  // Grid group
  import { Col, Container, Row, Footer } from '../src/lib/organisms'

  // Tabs group
  import { Tabs, Tab, TabPanel, TabPanels, TabsBar } from '../src/lib/organisms/Tabs'

  // dev things
  import { DevPanel } from '../src/lib/organisms/DevPanel/organisms/DevPanel'

  // Primitives
  export { Flex, InlineFlex } from './atoms/Primitives'

  // Non-components entity
  import { UIstyles } from '../src/theme/UIstyles'
  import { theme } from '../src/theme/index'

  // Hooks
  import {
    useClickOutside,
    useDeepCompareEffect,
    useDidMount,
    useDidUpdate,
    useForce,
    useScrollLock,
    useSetState,
    useSize,
    useToggle,
    useWindowSize
  } from '../src/hooks/useClickOutside'
  import { AttachArea } from 'lib'

  // General
  export const theme: IThemeInterface
  export const UIstyles: any
  export const Radio: any
  export const Spacer: any
  export const Color: any
  export const Icon: any
  export const Text: any
  export const Heading: any
  export const Opacity: any
  export const Divider: any
  export const ToolTip: any
  export const Link: any
  export const Toggle: any
  export const Money: any
  export const Badge: any
  export const Tag: any
  export const List: any
  export const ListItem: any
  export const RangeSlider: any
  export const EllipsisOverflow: any
  export const SkeletonRect: any
  export const SkeletonBody: any
  export const SkeletonCir: any
  export const Hider: any
  export const Dropdown: any
  export const Button: any
  export const ButtonGroup: any
  export const Avatar: any
  // Molecules
  export const Checkbox: any
  export const ContextMenu: any
  export const AutoComplete: any
  export const Search: any
  export const Input: any
  export const InputControl: any
  export const InputLabel: any
  export const Select: any
  export const AttachArea: any
  export const MultiSelect: any
  export const ConfirmationField: any
  export const InlineEdit: any
  // Organisms
  export const Accordion: any
  // Date picker
  export const DatePicker: any
  export const FullDate: any
  export const Month: any
  export const Year: any
  // Grid group
  export const Col: any
  export const Container: any
  export const Row: any
  export const Footer: any
  // Tabs group
  export const Tabs: any
  export const Tab: any
  export const TabPanel: any
  export const TabPanels: any
  export const TabsBar: any
  export const DevPanel: any
  // Hooks
  export const useClickOutside: any
  export const useDeepCompareEffect: any
  export const useDidMount: any
  export const useDidUpdate: any
  export const useForce: any
  export const useHover: any
  export const useScrollLock: any
  export const useSetState: any
  export const useSize: any
  export const useToggle: any
  export const useWindowSize: any
}
