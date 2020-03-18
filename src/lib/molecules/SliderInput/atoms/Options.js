import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Money } from '../../../atoms/Money'
import { Text } from '../../../atoms/Text/Text'

import { theme } from 'theme'
export const Options = ({ type = 'values', stepsValues = ['0', '10', '20', '30', '40'], currency, min, max }) => {
  const steps = 5
  const values = stepsValues.map(value => (
    <Option>
      <Text>{value}</Text>
    </Option>
  ))
  return (
    <Wrapper type={type}>
      {type === 'borders' ? (
        <React.Fragment>
          <Option>
            <Money currency={currency} value={`${min}`} textAppend={'от '} />
          </Option>
          <Option>
            <Money currency={currency} value={`${max}`} textAppend={'до '} />
          </Option>
        </React.Fragment>
      ) : (
        <React.Fragment>{values}</React.Fragment>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.gray.g300};
  padding-right: 26px;
  padding-left: 30px;
`

const Option = styled.li``
Options.propTypes = {
  type: PropTypes.oneOf(['News', 'Photos'])
}
