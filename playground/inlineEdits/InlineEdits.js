import React from 'react'

import { InlineEdit } from 'lib'

export const InlineEdits = ({ ...rest }) => {
  return (
    <InlineEdit
      defaultText="Кредитная карта Гнездо Деньги Weekend"
      autoFocus={false}
      inputMaxLength={64}
      onFocus={text => {}}
      onFocusOut={text => {}}
      placeholder=""
    />
  )
}
