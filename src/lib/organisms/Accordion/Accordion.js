/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { AccordionItem } from './AccordionItem'

import { Divider } from 'src/lib/atoms/Divider/Divider'

export const Accordion = ({ items, size = 'lg' }) => {
  return (
    <React.Fragment>
      <Divider horizontal={true} />
      {items.map((item, index) => {
        return <AccordionItem key={index} data={item} size={size} />
      })}
    </React.Fragment>
  )
}

Accordion.propTypes = { items: PropTypes.array.isRequired, size: PropTypes.string }
