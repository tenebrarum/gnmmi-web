import { GnmmiTheme } from './themes/styled'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle<GnmmiTheme>`
  ${(props) => css<GnmmiTheme>`
    body {
      margin: 0;

      * {
        font-family: 'Arial';
        font-size: ${props.fonts.size.m};
        line-height: 1.5;
        color: ${props.colors.default};
      }
    }
  `}
`
