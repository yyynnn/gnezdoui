import React from 'react'

export const Bullit = ({ fill, stroke }) => {
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="4" fill={fill} stroke={stroke} />
    </svg>
  )
}
