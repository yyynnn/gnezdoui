import React from 'react'

import { data } from './api_example'

import { Navigation } from 'lib'

const customTabs = [
  { url: '/catalog', label: 'Все акции', title: 'Акции и скидки по картам Гнездо Банк', __typename: 'Tabs' }
]

export const NavigationDemo = () => {
  return <Navigation data={data} path="business" />
}

NavigationDemo.propTypes = {}
