import React from 'react'

import { ConfirmationField } from 'lib'

export const ConfirmationFields = () => {
  return (
    <ConfirmationField
      topText="Код из СМС"
      timer={true}
      fields={6}
      autoFocus={true}
      type="number"
      fieldWidth={32}
      fieldHeight={38}
      timerDuration={30}
      onComplete={(res, showErr) => {
        // func
        showErr('tERRORists win')
      }}
      onChange={res => {}}
      onChangePhoneClick={() => {
        // func
      }}
      onSendCodeClick={() => {
        // func
      }}
    />
  )
}
