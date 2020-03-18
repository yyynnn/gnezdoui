import React, { useState } from 'react'

import { data } from './dummyData'

import { ContextMenu, Link, Text, Heading } from 'lib'

export const ContextMenuDemo = () => {
  const [isRotate, toggleRotate] = useState(false)
  // eslint-disable-next-line no-magic-numbers
  const rotate = isRotate ? 180 : 0
  const clickedElement = (
    <Link
      dropdown={true}
      type="arrow_down"
      rotate={rotate}
      onClick={() => {
        toggleRotate(!isRotate)
      }}
    >
      <Heading>Ещё</Heading>
    </Link>
  )
  return <ContextMenu data={data} children={clickedElement} />
}
