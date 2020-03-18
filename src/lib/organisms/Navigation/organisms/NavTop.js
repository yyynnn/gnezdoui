/* eslint-disable no-magic-numbers */
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Contacts } from '../molecules/Contacts'
// import { RegionPicker } from '../molecules/RegionPicker'
// import { RegionCheck } from '../molecules/RegionCheck'

import { theme } from 'theme'
import { Text, Icon, Row, Col, Spacer, Container, Link } from 'lib'

export const Sections = ({ path, sections, className }) => {
  return (
    <SectionsWrapper className={className}>
      <Spacer space={0} spacemob={32} />
      {sections.map((section, i) => {
        return (
          <React.Fragment key={i}>
            {i === 0 ? null : <Spacer space={theme.spacings.s} samespace />}
            <StyledLink href={`${section.url}`}>
              <StyledText active={section.url === path} sizemob="sm" size="sm">
                {section.label}
              </StyledText>
            </StyledLink>
          </React.Fragment>
        )
      })}
    </SectionsWrapper>
  )
}

export const NavTop = ({
  data,
  path,
  showContacts,
  setShowContacts,
  showRegion,
  setShowRegion,
  showPicker,
  setShowPicker
}) => {
  useEffect(() => {
    let timer1 = setTimeout(() => setShowRegion(true), 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <Wrapper onMouseLeave={() => setShowContacts(false)}>
      {/* <RegionCheck
        visible={showRegion}
        okHandler={() => modalHandler('regionCheck')}
        noHandler={() => {
          modalHandler('region')
        }}
      /> */}
      <Container>
        <Row>
          <Col sm="8">
            <Sections sections={data.sections} path={path} />
          </Col>
          <Col sm="4">
            <Links>
              <StyledLink onClick={() => setShowContacts(!showContacts)}>
                <Spacer space={12} />
                <StyledText size="sm">{data.contacts.label}</StyledText>
                <Spacer space={12} />
              </StyledLink>
              <Spacer space={24} />
              <StyledLink icon={true} href={data.offices.url}>
                <Spacer space={12} />
                <FlexWrapper>
                  <StyledIcon type="map_marker" />
                  <Spacer space={4} />
                  <StyledText size="sm">{data.offices.label}</StyledText>
                </FlexWrapper>
                <Spacer space={12} />
              </StyledLink>
              {/* <StyledLink onClick={() => modalHandler('region')} icon={true}>
                <Spacer space={12} />
                <FlexWrapper>
                  <StyledIcon type="geo" />
                  <Spacer space={4} />
                  <StyledText size={'sm'} bold>
                    Москва и МО
                  </StyledText>
                </FlexWrapper>
                <Spacer space={12} />
              </StyledLink> */}
            </Links>
          </Col>
        </Row>
      </Container>
      {showContacts && <Contacts data={data} />}
      {/* <RegionPicker close={() => modalHandler('region')} visible={showPicker} /> */}
    </Wrapper>
  )
}
const FlexWrapper = styled.div`
  display: flex;
`
const Wrapper = styled.div`
  z-index: 6;
  background-color: ${theme.colors.gray.g700};
  width: 100%;
  position: relative;
`
const StyledIcon = styled(Icon)`
  svg {
    width: 16px;
    height: 16px;
    transition: all ${theme.transitions.basic};
  }
`
const StyledText = styled(Text)`
  color: ${({ active }) => (active ? theme.colors.black : theme.colors.gray.g300)};
  cursor: pointer;
  word-break: keep-all;
  padding: 0;
  transition: all ${theme.transitions.basic};
`

const StyledLink = styled(Link)`
  display: inline;
  cursor: pointer;
  padding: 0;
  word-break: keep-all;
  text-decoration: none;
  transition: all ${theme.transitions.basic};

  & svg {
    fill: ${theme.colors.gray.g300};
  }

  :hover {
    & svg {
      fill: ${theme.colors.red.primary};
    }

    ${StyledText} {
      transition: all ${theme.transitions.basic};
      color: ${theme.colors.red.primary};
    }
  }
`

const SectionsWrapper = styled.div`
  pointer-events: auto;
  display: flex;
  list-style: none;
  padding: 0;
  height: 100%;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  padding: 0;
  justify-content: flex-end;
`

NavTop.propTypes = {}
