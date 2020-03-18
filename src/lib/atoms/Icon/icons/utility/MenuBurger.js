import React from 'react'
import PropTypes from 'prop-types'

export const MenuBurger = ({ fill }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width="16" height="16" fill={fill} />
      <rect y="2" width="16" height="2" rx="1" fill={fill} />
      <rect y="12" width="16" height="2" rx="1" fill={fill} />
      <rect y="7" width="16" height="2" rx="1" fill={fill} />
    </svg>
  )
}
