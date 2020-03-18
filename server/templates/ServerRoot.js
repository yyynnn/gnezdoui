import * as React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { SizesProvider } from 'react-sizes'

import { App } from 'playground/App'

const theme = {}

export const ServerRoot = ({ sheet, sizesConfig }) => (
  <StyleSheetManager sheet={sheet}>
    <ThemeProvider theme={theme}>
      <SizesProvider config={sizesConfig}>
        <App />
      </SizesProvider>
    </ThemeProvider>
  </StyleSheetManager>
)
