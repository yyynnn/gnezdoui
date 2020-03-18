import React from 'react'
import styled from 'styled-components'

import { Button, Text, Icon, Row, Col, Spacer, Container, Heading, Divider } from 'lib'
import { theme } from 'theme'

export const Contacts = ({ data, close }) => {
  const { contacts } = data
  return (
    <React.Fragment>
      <DesktopWrapper>
        <Container>
          <Spacer space={32} />
          <Row>
            {contacts.sections.map((contact, i) => {
              return (
                <Col sm="3" key={i}>
                  <StyledText>{contact.label}</StyledText>
                  {contact.phones.map((phone, i) => {
                    return (
                      <React.Fragment key={i}>
                        <Spacer space={20} />
                        <Heading h={4}>{phone.num}</Heading>
                        <SubText size="sm">{phone.subText}</SubText>
                      </React.Fragment>
                    )
                  })}
                </Col>
              )
            })}
            <Col sm="3">
              <StyledText>{contacts.feedback.label}</StyledText>
              <Spacer space={12} />
              <StyledButton href={contacts.feedback.url} type={'secondary'}>
                <StyledText bold>Отправить сообщение</StyledText>
              </StyledButton>
            </Col>
          </Row>
          <Spacer space={32} />
        </Container>
      </DesktopWrapper>
      <MobileWrapper>
        <Row>
          <Col mob="10">
            <Spacer space={26} />
            <IconWrapper>
              <Spacer space={32} />
              <Text bold>Контактная информация</Text>
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
          {contacts.sections.map((contact, i) => {
            return (
              <React.Fragment key={i}>
                <Text size={'lg'}>{contact.label}</Text>
                {contact.phones.map((phone, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Spacer space={32} />
                      <Heading h={5}>
                        <ContactsPhone href={`tel:${phone.num.replace(/[^\d.+]/g, '')}`}>{phone.num}</ContactsPhone>
                      </Heading>
                      <SubText size="sm">{phone.subText}</SubText>
                    </React.Fragment>
                  )
                })}
                <Spacer space={104} />
              </React.Fragment>
            )
          })}
          <MailButton>
            <Spacer space={16} />
            <Text sizemob={'lg'} bold>
              {contacts.feedback.button}
            </Text>
            <Spacer space={16} />
          </MailButton>
        </InnerWrapper>
      </MobileWrapper>
    </React.Fragment>
  )
}

const ContactsPhone = styled.a``

const IconWrapper = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  justify-content: ${({ flex_end }) => (flex_end ? 'flex-end' : 'flex-start')};
`
const InnerWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 16px;
`
const MailButton = styled.div`
  border: 2px solid ${theme.colors.gray.g300};
  text-align: center;
  font-size: 16px;
  border-radius: 8px;

  :hover {
    border-color: ${theme.colors.red.hover};
  }

  :active {
    border-color: ${theme.colors.red.active};
  }
`

const StyledButton = styled(Button)`
  padding: ${theme.spacings.xs4}px 10px;
  border: 2px solid transparent;
`
const StyledText = styled(Text)`
  word-break: keep-all;
`
const SubText = styled(StyledText)`
  color: ${theme.colors.gray.secondary};
  font-size: 12px;
  line-height: 16px;
`
const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: block;
  }
  z-index: ${theme.z_indexes.high};
  position: absolute;
  min-height: 64px;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid};
  transition: all ${theme.transitions.basic};
`
const MobileWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
  z-index: ${theme.z_indexes.basic};
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mid};
  transition: all ${theme.transitions.basic};
  overflow-y: hidden;
`

Contacts.propTypes = {}
