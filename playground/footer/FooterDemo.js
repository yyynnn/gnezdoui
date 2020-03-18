import React from 'react'

import { data } from './dummyData'

import { Footer, Heading, Container } from 'lib'

export const FooterDemo = () => {
  return (
    <React.Fragment>
      <Footer data={data} />
    </React.Fragment>
  )
}
