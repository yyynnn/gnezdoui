import styled from 'styled-components'

export const EllipsisOverflow = styled.div`
  & > * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
  }
`
