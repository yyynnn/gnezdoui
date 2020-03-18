# Uikit and design guidelines

## Installation

```bash
npm add gneznoui
```

\*Aye, capt'n, there's **add** command in our npm!

## Dot env

To start up create an .env file in project's root whit this prerequisites:

```bash
PORT=666
DOCZ_PORT=667
APP_ID=gnezdo_docz
```

## Getting set up

To start using the components, please follow these steps:

- Wrap your application in a **styled-components** `<ThemeProvider>` and provide it with theme:

```jsx
import { ThemeProvider } from 'styled-components'
import { theme } from 'gneznoui'

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
```

- Then start using components. You can access theme from props:

```jsx
import { Button } from 'gneznoui'

const App = props => <Button style={{ color: props.theme.colors.pink }}>PRESS ME!</Button>
```

- Or just import it straight from the lib to avoid bloat:

```jsx
import { Button, theme } from 'gneznoui'
import styled from 'styled-components'

const App = props => <StyledButton>PRESS ME!</StyledButton>

const StyledButton = styled(Button)`
  color: ${theme.colors.pink};
`
// instead of
// const StyledButton = styled(Button)`
//    color: ${({ theme }) => theme.colors.pink};
//`
```

## After work is done

Write a conventional commit with:

```bash
npm run commit
```

Regular `git commit` with simple message wont cut it, resulting in error of `commitlint`

## [Changelog](https://github.com/yyynnn/gneznoui/releases)

## Authors

- **GNEZDO Bank Frontend team**

## License

This project is licensed under the Mozilla Public License Version 2.0 - see the [LICENSE.md](LICENSE.md) file for details
