import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ListItemL0 } from './molecules/ListItem_L0'

import { theme } from 'theme'

export const ListContext = React.createContext()

export const List = ({ className, data, size, children, listType = 'default' }) => {
  return (
    <StyledUl className={className} data-testid="list">
      <ListContext.Provider value={listType}>
        {children
          ? children
          : data.map((dataItem, idx) => {
              return (
                <React.Fragment key={idx}>
                  <ListItemL0 dataItem={dataItem} size={size} />
                </React.Fragment>
              )
            })}
      </ListContext.Provider>
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

List.propTypes = {
  /** data for childless render */
  data: PropTypes.array,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  listType: PropTypes.oneOf(['ul', 'ol', 'default'])
}
