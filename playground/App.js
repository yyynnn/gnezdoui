/* eslint-disable no-magic-numbers */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { hot } from 'react-hot-loader/root'

import { Fonts } from './styles/Fonts'
import { Spacings } from './spacing/Spacings'
import { Typography } from './typography/Typography'
import { Opacities } from './opacities/Opacities'
import { Grid } from './grid/Grid'
import { Buttons } from './buttons/Buttons'
import { Links } from './link/Links'
import { Accordions } from './accordion/Accordions'
import { Inputs } from './inputs/Inputs'
import { Checkboxes } from './checkbox/Checkboxes'
import { RadioGroup } from './radio/RadioGroupDemo'
import { BadgeComponent } from './badge/BadgeComponent'
import { Tooltips } from './tooltip/Tooltips'
import { ToggleDemo } from './toggle/ToggleDemo'
import { MoneyDemo } from './money/MoneyDemo'
import { Lists } from './lists/Lists'
import { TabsDemo } from './tabs/TabsDemo'
import { FooterDemo } from './footer/FooterDemo'
import { TagsDemo } from './tags/TagsDemo'
import { IconsDemo } from './icons/Icons'
import { SideNav } from './sideNav/SideNav'
import { ColorDemo } from './color/ColorDemo'
import { NavigationDemo } from './navigation/NavigationDemo'
import { ContextMenuDemo } from './contextMenu/ContextMenuDemo'
import { DatePickerDemo } from './datepicker/DatePickerDemo'
import { CalendarDemo } from './calendar/CalendarDemo'
import { Sliders } from './slider/Sliders'
import { AttachAreas } from './attachAreas/AttachAreas'
import { Skeletons } from './skeletons/Skeletons'
import { Cards } from './cards/Cards'
import { ConfirmationFields } from './confirmationField/ConfirmationFields'
import { InlineEdits } from './inlineEdits/InlineEdits'
import { Selects } from './select/Selects'
import { Avatars } from './avatars/Avatars'

import { Spacer, UIstyles, Container, DevPanel, SocBlock, Heading } from 'lib'
import { ColorMap } from 'playground/colors/ColorMap'
import { theme } from 'theme'

const mapping = {
  AttachArea: AttachAreas,
  Avatar: Avatars,
  DatePicker: DatePickerDemo,
  Calendar: CalendarDemo,
  Accordion: Accordions,
  Badge: BadgeComponent,
  Buttons: Buttons,
  Cards: Cards,
  Checkbox: Checkboxes,
  ConfirmationField: ConfirmationFields,
  ContextMenu: ContextMenuDemo,
  Color: ColorDemo,
  Colors: ColorMap,
  Grid,
  Icons: IconsDemo,
  InlineEdits: InlineEdits,
  Inputs,
  Selects,
  Link: Links,
  List: Lists,
  Money: MoneyDemo,
  Opacities,
  Radio: RadioGroup,
  Sliders,
  Skeletons,
  SMM: SocBlock,
  Spacings,
  Tabs: TabsDemo,
  Tag: TagsDemo,
  Toggle: ToggleDemo,
  Tooltip: Tooltips,
  Typography
}

export const App = hot(() => {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyles />
      <UIstyles />
      <Fonts />
      <NavigationDemo />
      {false && <DevPanel dev defOn={false} />}
      <SideNav data={mapping} />
      <Container>
        <Spacer space={theme.spacings.xl} />
        {Object.keys(mapping).map((CompName, idx) => {
          const Comp = mapping[CompName]
          const item = CompName.toLocaleLowerCase()
          return (
            <div id={item} key={idx}>
              <Heading h={1}>{CompName}</Heading>
              <Spacer space={40} />
              <Comp />
              <Spacer space={60} />
            </div>
          )
        })}
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
        <Spacer space={theme.spacings.xl4} />
      </Container>
      <FooterDemo />
    </React.Fragment>
  )
})

const GlobalStyles = createGlobalStyle` 
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`
