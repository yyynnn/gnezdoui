import React from 'react'

export const Calendar = ({ fill, stroke }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4V5H16V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5H6V4ZM8 12V10H6V12H8ZM6 17V15H8V17H6ZM13 15H11V17H13V15ZM11 10H13V12H11V10ZM18 17V15H16V17H18ZM16 12V10H18V12H16Z"
      fill={fill}
      stroke={stroke}
    />
  </svg>
)
