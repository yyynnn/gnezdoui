import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Phone = ({ fill }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6649 12.9273L10.9538 10.8864C10.541 10.4408 10.0654 10.2605 9.49408 10.5543L8.92279 10.8602C8.60515 11.0226 8.60292 11.1161 8.48555 11.298C8.17904 11.7753 7.76739 11.6668 7.5727 11.4604C6.7494 10.5832 5.72362 8.61117 5.71417 8.59282C5.37039 7.92361 5.16067 7.2227 5.03773 6.52735C4.991 6.24754 5.13452 5.85147 5.70082 5.87929C5.91776 5.89041 5.99453 5.9427 6.31217 5.77916L6.89348 5.49156C7.46478 5.19896 7.59606 4.70776 7.47368 4.11254L6.81226 1.53363C6.57084 1.05523 5.9873 0.862761 5.50946 1.10419L4.26951 1.72833C4.05479 1.83681 3.85453 2.05987 3.72491 2.31465C2.67855 4.08306 2.73974 6.86946 4.07314 9.46451C4.1221 9.5613 6.16475 14.5333 10.2323 14.9817C10.5149 15.0245 10.8114 14.9928 11.025 14.8804L12.2555 14.2363C12.7294 13.9882 12.913 13.4024 12.6649 12.9273Z"
        fill={fill}
      />
    </svg>
  )
}

const Wrapper = styled.div``

Phone.propTypes = {}