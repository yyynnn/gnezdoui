import React from 'react'
import styled from 'styled-components'
import { useDocs, Link } from 'docz'

const factor = 15

export const DocsList = () => {
  const docs = useDocs()
  return (
    <Wrapper height={docs.length}>
      {docs.map(doc => (
        <Link key={doc.id} to={doc.route}>
          {doc.name}
        </Link>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: ${({ height }) => height * factor}px;
`
