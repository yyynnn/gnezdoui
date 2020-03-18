import React from 'react'
import styled from 'styled-components'

import { Text } from 'src/lib/atoms/Text'
import { theme } from 'theme'

export const File = ({ fill = theme.colors.red.primary, stroke = '#CED4DA', fileType = 'file' }) => {
  return (
    <Wrapper>
      <FileText reset color={fill}>
        {fileType.toLocaleUpperCase()}
      </FileText>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 27.9996L8.20025 27.9996C8.08979 27.9996 8.00025 27.9101 8.00025 27.7996L8.00025 18.9997L6.00025 18.9997L6.00025 26.9996C6.00025 27.3504 6.00025 27.6871 6.00025 28C6.00025 29.1045 6.89561 29.9997 8.00013 29.9997L17.9774 30.0003C18.7841 30.0004 19.5569 29.6755 20.1213 29.099L27.4294 21.6344C27.7953 21.2606 28.0002 20.7583 28.0002 20.2352L28.0002 5.00037C28.0002 4.64963 28.0002 4.31296 28.0002 4.0001C28.0002 2.89553 27.1048 2.00037 26.0002 2.00037L8.00025 2.00037C6.89568 2.00037 6.00025 2.89553 6.00025 4.0001C6.00025 4.31296 6.00025 4.64963 6.00025 5.00037L6.00025 6.99992L8.00025 6.99992L8.00025 4.20037C8.00025 4.08991 8.08979 4.00037 8.20025 4.00037L25.8002 4.00037C25.9107 4.00037 26.0002 4.08991 26.0002 4.20037L26.0002 19.0003C26.0002 19.5526 25.5525 20.0003 25.0002 20.0003L20 20.0003C18.8954 20.0003 18 20.8957 18 22.0003L18 27C18 27.5524 17.5523 28.0002 16.9999 28C16.3687 27.9998 15.6458 27.9996 15.5 27.9996Z"
          fill={stroke}
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const FileText = styled(Text)`
  position: absolute;
  font-size: 8px;
  font-weight: 800;
  font-style: normal;
  top: 8px;
  letter-spacing: 0.2px;
  color: ${({ color }) => color};
`
