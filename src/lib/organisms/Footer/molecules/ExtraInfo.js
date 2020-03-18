import React from 'react'
import styled from 'styled-components'

import { Text } from 'lib/atoms/Text/Text'
import { Spacer } from 'lib/atoms/Spacer/Spacer'
import { theme } from 'theme'
import { Link } from 'lib/atoms/Link'

export const ExtraInfo = ({ extra_info }) => {
  return (
    <WrapperCaptain>
      {extra_info.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <StyledLink href={item.link} size="sm">
              <Text size="sm" sizemob="sm">
                {item.name}
              </Text>
            </StyledLink>
            <Spacer space={theme.spacings.xs} />
          </React.Fragment>
        )
      })}
    </WrapperCaptain>
  )
}

const WrapperCaptain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledLink = styled(Link)`
  color: ${theme.colors.gray.g300};
`
