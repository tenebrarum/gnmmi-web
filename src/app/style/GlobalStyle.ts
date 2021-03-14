import { createGlobalStyle, css } from 'styled-components'

import { GnmmiTheme } from './themes/styled'

export const GlobalStyle = createGlobalStyle<GnmmiTheme>`
  ${(props) => css<GnmmiTheme>`
    html {
      height: 100%;
    }

    body {
      height: 100%;
      margin: 0;

      * {
        font-family: 'Arial';
        font-size: ${props.fonts.size.m};
        line-height: 1.5;
        color: ${props.colors.default};
      }

      > section {
        height: 100%;
      }
    }
  `}
`
