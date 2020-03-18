/* eslint-disable no-magic-numbers */
import React from 'react'
import styled from 'styled-components'

import { MobileList } from '../molecules/MobileList'

import { theme } from 'theme'
import { Text } from 'src/lib/atoms/Text/Text'
import { Row, Col } from 'src/lib/organisms/Grid'
import { Spacer } from 'src/lib/atoms/Spacer'

export const FooterMid = ({ navigation }) => {
  return (
    <WrapperCaptain>
      <Spacer space={theme.spacings.m} />
      <StyledRow>
        {navigation.map((item, i) => {
          const linkList = item.list
          const IS_FIRST = i === 0 ? 12 : 4
          return (
            <Col sm={`${IS_FIRST}`} md="3" key={i}>
              <DesktopListWrapper>
                <DesktopText size="md" bold={true}>
                  {item.title}
                </DesktopText>
                <Spacer space={theme.spacings.s} />
                <DesktopSubText>
                  {linkList.map((elem, e) => {
                    return (
                      <React.Fragment key={e}>
                        <CustomLink href={elem.link}>
                          <StyledText size="md">{elem.name}</StyledText>
                        </CustomLink>
                        <Spacer space={theme.spacings.xs2} />
                      </React.Fragment>
                    )
                  })}
                </DesktopSubText>
                <Spacer space={theme.spacings.m} />
              </DesktopListWrapper>

              <MobileListWrapper>
                <MobileList list={linkList} title={item.title} />
              </MobileListWrapper>
            </Col>
          )
        })}
      </StyledRow>
    </WrapperCaptain>
  )
}

const WrapperCaptain = styled.div`
  background: ${theme.colors.gray.g700};
`

const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`

const DesktopText = styled(Text)`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
`
const DesktopListWrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
`

const MobileListWrapper = styled.div`
  display: block;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`

const CustomLink = styled.a`
  text-decoration: none;
`

const DesktopSubText = styled.div``

const StyledRow = styled(Row)`
  & > div:first-child > ${DesktopListWrapper} {
    display: none;

    @media (min-width: ${theme.breakpoints.sm}px) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: ${theme.breakpoints.md}px) {
      display: flex;
      flex-direction: column;
    }
  }

  & > div:first-child > ${DesktopListWrapper} > ${DesktopSubText} {
    display: none;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.sm}px) {
      display: flex;
      flex-direction: row;
    }

    @media (min-width: ${theme.breakpoints.md}px) {
      flex-direction: column;
    }
  }
`
