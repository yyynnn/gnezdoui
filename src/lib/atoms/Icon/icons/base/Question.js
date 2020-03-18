import React from 'react'

export const Question = ({ fill }) => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx="12" cy="12" r="8" fill={fill || '#adb5bd'} />
    <path
      fill="#fff"
      d="M11 13.9h1.6a1.7 1.7 0 0 1 1-1.8A2.3 2.3 0 0 0 15 10c0-1.5-1.2-2.4-2.9-2.4a2.5 2.5 0 0 0-2.8 2.6H11a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 .5-.4.8-1 1.2-.7.4-1 1-1 2.5zm.8 2.7a1 1 0 1 0 0-2 1 1 0 1 0 0 2z"
    />
  </svg>
)
