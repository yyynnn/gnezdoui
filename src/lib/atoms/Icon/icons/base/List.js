import React from 'react'

export const List = ({ fill, stroke }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke={stroke} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="16" height="2" rx="1" />
      <rect x="8" y="11" width="12" height="2" rx="1" />
      <rect x="12" y="16" width="8" height="2" rx="1" />
    </svg>
  )
}
