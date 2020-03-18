/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// base
import { LikeIcon } from './icons/social/LikeIcon'
import { Close } from './icons/base/Close'
import { Check } from './icons/base/Check'
import { Question } from './icons/base/Question'
import { Bullit } from './icons/base/Bullit'
import { More } from './icons/base/More'
import { Calendar } from './icons/base/Calendar'
import { GnezdoLogo } from './icons/GnezdoLogo'
import { Search } from './icons/Search'
import { Phone } from './icons/Phone'
import { MapMarker } from './icons/base/MapMarker'
import { Plate } from './icons/base/Plate'
import { List } from './icons/base/List'
import { Clock } from './icons/base/Clock'
import { Sparks } from './icons/base/Sparks'
import { Visible } from './icons/base/Visible'
import { Invisible } from './icons/base/Invisible'
// social
import { Apple } from './icons/social/Apple'
import { Google } from './icons/social/Google'
import { Instagram } from './icons/social/Instagram'
import { Facebook } from './icons/social/Facebook'
import { Twitter } from './icons/social/Twitter'
import { Odnokl } from './icons/social/Odnokl'
import { Vk } from './icons/social/Vk'
import { Mail } from './icons/base/Mail'
import { Telegram } from './icons/social/Telegram'
// loaders
import { LoaderCircles } from './icons/loaders/LoaderCircles'
// arrows
import { ArrowDown_x16 } from './icons/arrows/ArrowDown_x16'
import { ArrowDown } from './icons/arrows/ArrowDown'
import { ArrowUp_x16 } from './icons/arrows/ArrowUp_x16'
import { ArrowUp } from './icons/arrows/ArrowUp'
import { ArrowRight } from './icons/arrows/ArrowRight'
import { ArrowLeft } from './icons/arrows/ArrowLeft'
// files
import { File } from './icons/file_types/File'
import { Geo } from './icons/Geo'
// utility
import { OpenRight } from './icons/utility/OpenRight'
import { MenuBurger } from './icons/utility/MenuBurger'
import { Edit } from './icons/utility/Edit'
// plastic
import { Visa } from './icons/plastic/Visa'
import { MC } from './icons/plastic/MC'
import { Mir } from './icons/plastic/Mir'
import { Profit } from './icons/base/Profit'
import { Card } from './icons/plastic/Card'

export const iconRegistry = {
  app_store: Apple,
  arrow_down: ArrowDown,
  arrow_left: ArrowLeft,
  arrow_right: ArrowRight,
  arrow_up: ArrowUp,
  bullit: Bullit,
  check: Check,
  clock: Clock,
  close: Close,
  edit: Edit,
  facebook: Facebook,
  file: File,
  geo: Geo,
  google_play: Google,
  instagram: Instagram,
  like: LikeIcon,
  list: List,
  loader: LoaderCircles,
  mail: Mail,
  map_marker: MapMarker,
  mc: MC,
  menu: MenuBurger,
  mir: Mir,
  more: More,
  gnezdoLogo: GnezdoLogo,
  ok: Odnokl,
  open_right: OpenRight,
  phone: Phone,
  plate: Plate,
  profit: Profit,
  question: Question,
  search: Search,
  sparks: Sparks,
  telegram: Telegram,
  twitter: Twitter,
  visa: Visa,
  calendar: Calendar,
  visible: Visible,
  invisible: Invisible,
  card: Card,
  vk: Vk,
  arrow_down_x16: ArrowDown_x16,
  arrow_up_x16: ArrowUp_x16
}

export const Icon = ({ type, fill, stroke, fileType, ...rest }) => {
  const IconType = iconRegistry[type]
  return type && IconType ? (
    <IconWrapper {...rest} data-testid={`icon_${type}`}>
      <IconType fill={fill} stroke={stroke} fileType={fileType} />
    </IconWrapper>
  ) : null
}

const IconWrapper = styled.i`
  display: grid;
  justify-items: center;

  &:focus {
    outline: none;
  }

  & svg:focus {
    outline: none;
  }
`

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string
}
