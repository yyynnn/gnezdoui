import React from 'react'

import { Spacer, Heading, Col, Container, Row, Text, Divider } from 'lib'

// eslint-disable-next-line no-magic-numbers
const seqHeading = [1, 2, 3, 4, 5, 6]
const seqText = [
  { size: 'lg', caption: false, bold: false },
  { size: 'lg', caption: false, bold: true },
  { size: 'md', caption: false, bold: false },
  { size: 'md', caption: false, bold: true },
  { size: 'sm', caption: false, bold: false },
  { size: 'sm', caption: false, bold: true },
  { size: 'tiny', caption: true, bold: false },
  { size: 'tiny', caption: true, bold: false }
]

export const Typography = () => {
  return (
    <Row>
      <Col md="6">
        <Text>Заголовки - "GNEZDO Bank"</Text>
        <Spacer />
      </Col>
      <Col md="6">
        <Text>Текст - "GNEZDO Bank"</Text>
        <Spacer />
      </Col>
      <Col md="12">
        <Divider />
        <Spacer />
        <Spacer />
      </Col>
      <Col md="6">
        {seqHeading.map(h => (
          <React.Fragment key={h}>
            <Heading h={h}>H{h} Header</Heading>
            <Spacer />
          </React.Fragment>
        ))}
      </Col>
      <Col md="6">
        {seqText.map((textItem, index) => (
          <React.Fragment key={index}>
            <Text size={textItem.size} bold={textItem.bold} caption={textItem.caption}>
              Едва осознав, что происходит, мы оторвались от земли.
            </Text>
            <Spacer />
          </React.Fragment>
        ))}
      </Col>
    </Row>
  )
}
