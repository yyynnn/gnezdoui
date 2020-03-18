/* eslint-disable no-magic-numbers */
import React, { useRef } from 'react'
import styled from 'styled-components'

import { DropMenu } from '../molecules/DropMenu'

import { useClickOutside } from 'hooks/useClickOutside'
import { Container, Icon, Spacer, Row, Col, Text, Button, ContextMenu, Link } from 'lib'
import { theme } from 'theme'

export const NavMid = ({ data, dropMenu, setDropMenu }) => {
  const { menu } = data
  const ref = useRef()

  useClickOutside(ref, () => setDropMenu(null))

  const handler = menu => {
    dropMenu == null || menu != dropMenu ? setDropMenu(menu) : setDropMenu(null)
  }

  return (
    <Wrapper ref={ref} visible={dropMenu}>
      <WrapperInner>
        <Container>
          <Row>
            <Col sm="3" md="2">
              <IconWrapper>
                <Spacer space={18} />
                <a href="https://www.gnezno.ru">
                  <StyledIcon type="like" fill={theme.colors.red.primary} />
                </a>
                <Spacer space={18} />
              </IconWrapper>
            </Col>
            <Col sm="6" md="7">
              <SubSections>
                {menu.items.slice(0, menu.maxVisible).map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      {i == '0' ? null : <Spacer space={12} />}
                      <WrapperFlex>
                        <Spacer space={22} />
                        <StyledLink
                          onClick={() => {
                            item.hoverMenu ? handler(item.hoverMenu) : null
                          }}
                          href={item.hoverMenu ? null : item.url}
                          size="md"
                        >
                          <Text size="md">{item.label}</Text>
                        </StyledLink>
                        <Spacer space={22} />
                      </WrapperFlex>
                      <Spacer space={12} />
                    </React.Fragment>
                  )
                })}
                <Spacer space={12} />
                {menu.items.length > menu.maxVisible - 1 ? (
                  <WrapperDropDown>
                    <ContextMenu
                      data={menu.items.slice(menu.maxVisible).map((item, i) => {
                        return {
                          id: i,
                          text: item.label,
                          link: item.url
                        }
                      })}
                      top_shift={24}
                    >
                      <React.Fragment>
                        <Spacer space={20} />
                        <MoreLink>
                          <StyledText size="md">
                            Ещё <Icon type="arrow_down" />
                          </StyledText>
                        </MoreLink>
                        <Spacer space={20} />
                      </React.Fragment>
                    </ContextMenu>
                  </WrapperDropDown>
                ) : null}
              </SubSections>
            </Col>
            <Col sm="3">
              <Spacer space={16} />
              <ButtonWrapper>
                <StyledButton type="outline" size={'sm'}>
                  <a href="https://online.gnezno.ru/webmvc/clientLogin">
                    <Text size="md" bold>
                      Онлайн-банк
                    </Text>
                  </a>
                </StyledButton>
              </ButtonWrapper>
              <Spacer space={16} />
            </Col>
          </Row>
        </Container>
      </WrapperInner>
      {dropMenu && <DropMenu data={dropMenu} close={() => setDropMenu(null)} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 5;
  box-shadow: ${({ visible }) => (visible ? null : theme.shadows.mid_basic)};
  width: 100%;
  transition: all ${theme.transitions.basic};
`
const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledIcon = styled(Icon)`
  justify-content: flex-start;
  margin-right: 8px;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & a {
    display: block;
  }
`
const WrapperInner = styled.div`
  z-index: 5;
  position: relative;
  background: ${theme.colors.white};
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  padding: ${theme.spacings.xs4}px 10px;
  margin: 0;

  a {
    text-decoration: none;
    color: unset;
  }

  :hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.red.primary};
  }
`
const WrapperDropDown = styled.div`
  display: flex;
  align-items: center;
`
const StyledLink = styled.a`
  color: ${theme.colors.black};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all ${theme.transitions.basic};

  :hover {
    color: ${theme.colors.red.primary};
  }
`
const MoreLink = styled(Link)`
  color: ${theme.colors.black};
  transition: all ${theme.transitions.basic};

  :hover {
    color: ${theme.colors.red.primary};

    div {
      color: ${theme.colors.red.primary};
    }

    & svg {
      fill: ${theme.colors.red.primary};
      transition: all ${theme.transitions.basic};
    }
  }

  & svg {
    fill: ${theme.colors.gray.g300};
  }
`
const StyledText = styled(Text)`
  color: ${theme.colors.black};
  display: flex;
  align-items: center;

  & i {
    position: relative;
    top: -1px;
  }

  :hover {
    color: ${theme.colors.red.primary};
  }
`
const SubSections = styled.div`
  display: flex;
  list-style: none;
`
const SubSectionItem = styled.a`
  position: relative;
  align-items: center;
`
NavMid.propTypes = {}
