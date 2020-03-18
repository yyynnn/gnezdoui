import React from 'react'

import { Row, Col, Spacer } from 'lib'
import { AttachArea } from 'lib/molecules/AttachArea/AttachArea'

export const AttachAreas = () => {
  return (
    <Row>
      <Col md="12">
        <AttachArea enabled={true} maxFileSize={25000000} descriptionTip={true} imagesOnly={true} multiple={true} />
      </Col>
    </Row>
  )
}
