import { createGlobalStyle } from 'styled-components'

import { theme } from 'theme'

export const SpacerGolbalStyles = createGlobalStyle`
[ data-testid = 'spacer' ] {
    background-color: ${theme.colors.red.primary};
    border: 1px solid ${theme.colors.red.hover};
    border-radius: ${theme.radiuses.sm}px;
    opacity: 0.5;
}

[ data-testid = 'inspector' ] [ data-testid = 'spacer' ]:before {
    display: none;
}

[ data-testid = 'inspector' ] [ data-testid = 'spacer' ] {
    background-color: transparent;
    border: none;

}

[ data-testid = 'spacer' ]:before {
   color: ${theme.colors.white};
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'GNEZDO Sans';
   font-weight: 800;
}
`
