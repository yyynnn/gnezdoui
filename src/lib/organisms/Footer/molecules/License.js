import React from 'react'
import styled from 'styled-components'

import { Text } from 'lib/atoms/Text/Text'
import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { theme } from 'theme'

export const License = ({ license }) => {
  return (
    <WrapperOfficer>
      <StyledText size="sm" sizemob="sm">
        {license.name}
      </StyledText>
      <StyledText size="sm" sizemob="sm">
        {license.number}
      </StyledText>
      <Spacer space={theme.spacings.xs3} />
    </WrapperOfficer>
  )
}

const WrapperOfficer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
