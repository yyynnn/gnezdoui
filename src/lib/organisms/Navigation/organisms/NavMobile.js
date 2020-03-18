/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import { Col } from '../../Grid/Col'
import { Row } from '../../Grid/Row'
import { Spacer } from '../../../atoms/Spacer/Spacer'
import { Icon } from '../../../atoms/Icon'
import { Divider } from '../../../atoms/Divider/Divider'
import { Text } from '../../../atoms/Text/Text'
import { RegionPicker } from '../molecules/RegionPicker'

import { MobileDropDown } from './MobileDropDown'
import { Sections } from './NavTop'

import { Contacts } from 'lib/organisms/Navigation/molecules/Contacts'
import { theme } from 'theme'
import { useScrollLock } from 'hooks/useScrollLock'
import { useWindowSize } from 'hooks'

const NavBodyLock = () => {
  useScrollLock()
  return null
}

export const NavMobile = ({
  data,
  showMobMenu,
  setShowMobMenu,
  showContacts,
  setShowContacts,
  showRegion,
  setShowRegion,
  showPicker,
  setShowPicker
}) => {
  const { width } = useWindowSize()

  showMobMenu && width > theme.breakpoints.sm && setShowMobMenu(false)

  return (
    <Wrapper contacts={showContacts} picker={showPicker} open={showMobMenu}>
      {showMobMenu && (
        <Backdrop
          onClick={e => {
            e.stopPropagation()
            setShowMobMenu(false)
          }}
        />
      )}
      {showMobMenu && <NavBodyLock />}
      {/* <RegionCheck
        visible={showRegion}
        okHandler={() => {
          modalHandler('region')
        }}
        noHandler={() => {
          modalHandler('picker')
        }}
      /> */}
      {showContacts && (
        <Contacts
          data={data}
          close={() => {
            setShowContacts(!showContacts)
          }}
          mob={true}
        />
      )}
      {/* {showPicker && (
        <RegionPicker
          close={() => {
            setShowPicker(false)
          }}
          mob={true}
        />
      )} */}
      <WrapperTop>
        <Spacer space={24} />
        <Row>
          <Col mob="8">
            <IconWrapper>
              <Spacer space={32} />
              <Icon type="like" fill={theme.colors.red.primary} />
            </IconWrapper>
          </Col>

          <Col mob="4">
            <Spacer space={4} />
            <MenuWrapper>
              <Text bold>Меню</Text>
              <Spacer space={24} />
              <MenuIcon
                onClick={() => {
                  setShowMobMenu(true)
                }}
                open={showMobMenu}
              >
                <Spacer space={4} />
                <Icon type="menu" fill={theme.colors.gray.primary} />
                <Spacer space={4} />
              </MenuIcon>
              <CloseIcon
                onClick={() => {
                  setShowMobMenu(false)
                }}
                open={showMobMenu}
              >
                <Spacer space={4} />
                <Icon type="close" fill={theme.colors.gray.primary} />
                <Spacer space={4} />
              </CloseIcon>
              <Spacer space={32} />
            </MenuWrapper>
            <Spacer space={4} />
          </Col>
        </Row>
        <Spacer space={24} />
        <Divider />
      </WrapperTop>
      <Collapse isOpened={showMobMenu}>
        <StyledSections sections={data.sections} mob={true} />
        <DropMenuWrapper>
          <Divider horizontal={true} />

          {data.menu.items.slice(0, 5).map((item, i) => (
            <MobileDropDown key={i} title={item.label} list={item.hoverMenu && item.hoverMenu.links} />
          ))}
          {data.menu.items.length > data.menu.maxVisible - 1 ? (
            <MobileDropDown title="Ещё" list={data.menu.items.slice(5).map(item => item)} />
          ) : null}

          <Spacer space={32} />
          <OnlineButton>
            <Spacer space={16} />
            <a href="https://online.gnezno.ru/webmvc/clientLogin">
              <Text size="md" bold>
                Онлайн-банк
              </Text>
            </a>
            <Spacer space={16} />
          </OnlineButton>
          <Spacer space={52} />
          <Link
            onClick={() => {
              setShowContacts(!showContacts)
            }}
          >
            <StyledIcon type="phone" fill={theme.colors.gray.g300} />
            <Spacer space={16} />
            <Text>Контактная информация</Text>
          </Link>
          <Spacer space={40} />
          <Link>
            <StyledIcon type="map_marker" fill={theme.colors.gray.g300} />
            <Spacer space={16} />
            <Text>Офисы и банкоматы</Text>
          </Link>
          <Spacer space={40} />
          {/* <Link
            onClick={() => {
              modalHandler('picker')
            }}
          >
            <StyledIcon type="geo" fill={theme.colors.gray.g300} />
            <Spacer space={16} />
            <Text>Москва и МО</Text>
          </Link> */}
          <Spacer space={32} />
        </DropMenuWrapper>
      </Collapse>
    </Wrapper>
  )
}

const StyledIcon = styled(Icon)`
  padding-top: 2px;
`
const Link = styled.div`
  display: flex;
  padding: 0 16px;
`
const OnlineButton = styled.div`
  margin: 0 16px;
  border: 2px solid ${theme.colors.gray.g300};
  text-align: center;
  border-radius: 8px;

  :hover {
    border-color: ${theme.colors.red.hover};
  }

  :active {
    border-color: ${theme.colors.red.active};
  }
`
const StyledSections = styled(Sections)`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: ${theme.colors.gray.g700};

  &::-webkit-scrollbar {
    display: none;
  }
`
const DropMenuWrapper = styled.div`
  pointer-events: auto;
  overflow-y: auto;

  & > {
    padding: 0 16px;
  }
  background-color: ${theme.colors.white};
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  pointer-events: auto;
`
const MenuIcon = styled.div`
  transition: all ${theme.transitions.basic};

  & svg {
    max-height: ${({ open }) => (open ? '0px' : '16px')};
    width: ${({ open }) => (open ? '0px' : '16px')};
  }
`
const CloseIcon = styled.div`
  pointer-events: auto;
  transition: all ${theme.transitions.basic};

  & svg {
    max-height: ${({ open }) => (open ? '16px' : '0px')};
    width: ${({ open }) => (open ? '16px' : '0px')};
  }
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  pointer-events: auto;

  & svg {
    height: 24px;
    width: 108px;
  }
`
const WrapperTop = styled.div`
  background-color: ${theme.colors.white};
`
const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  z-index: 5;
  height: 100%;
  position: fixed;
  overflow: ${({ contacts, picker }) => (contacts || picker ? 'hidden' : 'auto')};
`

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.76);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${theme.z_indexes.negative};

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`

NavMobile.propTypes = {}
