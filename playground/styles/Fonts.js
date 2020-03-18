import { createGlobalStyle } from 'styled-components'

export const Fonts = createGlobalStyle`
@font-face {
  font-family: 'GNEZDO Sans';
  src: url('/GNEZDOSans-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
  font-feature-settings: 'tnum' on, 'lnum' on;
}

@font-face {
  font-family: 'GNEZDO Sans';
  src: url('/GNEZDOSans-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: fallback;
  font-feature-settings: 'tnum' on, 'lnum' on;
}

@font-face {
  font-family: 'GNEZDO Sans';
  src: url('/GNEZDOSans-Medium.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
  font-feature-settings: 'tnum' on, 'lnum' on;
}
`
