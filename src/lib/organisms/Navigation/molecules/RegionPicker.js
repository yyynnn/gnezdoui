/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from 'theme'
import { Link, Text, Icon, Row, Col, Spacer, Container, Heading, AutoComplete, Divider } from 'lib'

const data_input_items = ['Москва', 'Владивосток', 'Адыгея', 'Ку', 'Ме'].map((city, i) => ({
  value: i,
  label: city
}))
const data_city = [
  {
    literal: 'А',
    cities: ['Адыгея', 'Алтай Респ.', 'Алтайский край', 'Амурская обл.', 'Архангельская обл.', 'Астраханская обл.']
  },
  {
    literal: 'Б',
    cities: ['Башкортостан', 'Белгородская обл.', 'Башкортостан', 'Белгородская обл.', 'Брянская обл.']
  },
  {
    literal: 'В',
    cities: ['Владимирская обл.', 'Волгоградская обл.', 'Вологодская обл.', 'Воронежская обл.']
  },
  {
    literal: 'Е',
    cities: ['Еврейская автономная обл.']
  },
  {
    literal: 'З',
    cities: ['Забайкальский край']
  },
  {
    literal: 'И',
    cities: ['Ивановская обл.', 'Иркутская обл.']
  },
  {
    literal: 'К',
    cities: ['Калининградская обл.', 'Калужская обл.', 'Кемеровская обл.', 'Кировская обл.', 'Коми']
  },
  {
    literal: 'Л',
    cities: ['Калининградская обл.', 'Калужская обл.', 'Кемеровская обл.', 'Кировская обл.', 'Коми']
  }
]

export const RegionPicker = ({ close, mob = false }) => {
  const [value, onChange] = useState('')
  return (
    <React.Fragment>
      <DesktopWrapper mob={mob}>
        <Container>
          <Spacer space={32} />
          <Row>
            <Col sm="11">
              <Heading h={4}>Выберите регион обслуживания</Heading>
            </Col>
            <Col sm="1">
              <IconWrapper flex_end={true}>
                <Icon onClick={close} type="close" fill={theme.colors.black} />
              </IconWrapper>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Spacer space={8} />
              <StyledText>Банк представлен в 74 городах и в других 71 населенных пунктах</StyledText>
              <Spacer space={32} />
              <AutoComplete
                search
                placeholder="Поиск региона"
                items={data_input_items}
                onChange={() => onChange(value)}
              />
            </Col>
          </Row>
          <Spacer space={32} />
          <CityList>
            {data_city.map((group, i) => (
              <CityGroup key={i}>
                {group.cities.map((city, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <WrapperCity first={idx == '0' ? true : false}>
                        {idx == '0' ? (
                          <React.Fragment>
                            <Literal>
                              <Text bold size="lg">
                                {group.literal}
                              </Text>
                            </Literal>
                          </React.Fragment>
                        ) : null}
                        <StyledLink>
                          <City size="lg">{city}</City>
                        </StyledLink>
                        <Spacer space={8} />
                      </WrapperCity>
                      <Spacer space={8} />
                    </React.Fragment>
                  )
                })}
                <Spacer space={32} />
              </CityGroup>
            ))}
          </CityList>
          <Spacer space={32} />
        </Container>
      </DesktopWrapper>
      <MobileWrapper mob={mob}>
        <Row>
          <Col mob="10">
            <Spacer space={26} />
            <IconWrapper>
              <Spacer space={32} />
              <Text bold>Выберите регион обслуживания</Text>
            </IconWrapper>
            <Spacer space={26} />
          </Col>
          <Col mob="2">
            <Spacer space={32} />
            <IconWrapper flex_end={true}>
              <Icon onClick={close} type="close" fill={theme.colors.black} />
              <Spacer space={32} />
            </IconWrapper>
            <Spacer space={32} />
          </Col>
        </Row>
        <Divider />
        <InnerWrapper>
          <AutoComplete search={true} items={data_input_items} id="OE)V3Evd_2" tooltip="Text test" placeholder="" />
          <Spacer space={48} />
          {data_city.map((group, i) => {
            return (
              <React.Fragment key={i}>
                <Text bold size="lg">
                  {group.literal}
                </Text>
                <Spacer space={24} />
                {group.cities.map((city, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <WrapperCity first={false}>
                        <Text mobSize="lg" size="lg">
                          {city}
                        </Text>
                      </WrapperCity>
                      <Spacer space={24} />
                    </React.Fragment>
                  )
                })}
                <Spacer space={48} />
              </React.Fragment>
            )
          })}
        </InnerWrapper>
      </MobileWrapper>
    </React.Fragment>
  )
}
const StyledLink = styled(Link)`
  color: ${theme.colors.black};

  :hover {
    color: ${theme.colors.red.primary};
  }
`
const CityList = styled.div`
  display: block;
  column-count: 3;
  column-gap: 50px;
  column-fill: balance;
  @media (min-width: ${theme.breakpoints.lg}px) {
    column-count: 4;
  }
  min-height: 64px;
`
const City = styled(Text)`
  margin-left: 40px;
`
const InnerWrapper = styled.div`
  padding: 16px;
`
const Literal = styled.div`
  width: 16px;
  margin-right: -16px;
`
const StyledText = styled(Text)`
  color: ${theme.colors.gray.secondary};
`
const CityGroup = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
`

const WrapperCity = styled.div`
  ${({ first }) => (first ? 'display:flex; justify-content: flex-start' : 'display:flex;')};
`

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: ${({ flex_end }) => (flex_end ? 'flex-end' : 'flex-start')};
`

const MobileWrapper = styled.div`
  z-index: ${theme.z_indexes.basic};
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid};
  transition: all ${theme.transitions.basic};
  pointer-events: auto;
  overflow-y: auto;
`
const DesktopWrapper = styled.div`
  z-index: ${theme.z_indexes.basic};
  position: absolute;
  min-height: 64px;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid};
  transition: all ${theme.transitions.basic};
`

RegionPicker.propTypes = {}
