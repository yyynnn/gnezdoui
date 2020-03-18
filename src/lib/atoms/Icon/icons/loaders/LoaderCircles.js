import React from 'react'

export const LoaderCircles = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 65 65">
    <circle fill={fill} stroke={stroke || '#343A40'} cx="15" cy="30" r="6">
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        type="translate"
        values="0 15 ; 0 -15; 0 15"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle fill={fill} stroke={stroke || '#343A40'} cx="35" cy="30" r="6">
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        type="translate"
        values="0 10 ; 0 -10; 0 10"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle fill={fill} stroke={stroke || '#343A40'} cx="55" cy="30" r="6">
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        type="translate"
        values="0 5 ; 0 -5; 0 5"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
)
