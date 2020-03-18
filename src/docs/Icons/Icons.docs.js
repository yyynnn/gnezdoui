import React from 'react'

import { theme, Row, Col, Icon, Text, Spacer } from 'lib'
import { iconRegistry } from 'src/lib/atoms/Icon/Icon'

export const IconsDocs = () => {
  return (
    <Row>
      {Object.keys(iconRegistry).map(icon => (
        <Col key={icon} md="2">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            {icon !== '__filemeta' && <Icon type={icon} fill={theme.colors.gray.primary} fileType="test" />}
            {icon !== '__filemeta' && <Text>{icon}</Text>}
            <Spacer />
          </div>
        </Col>
      ))}
    </Row>
  )
}
