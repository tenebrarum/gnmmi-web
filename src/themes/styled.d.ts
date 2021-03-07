import 'styled-components'

interface Fontsizes {
  s: string
  m: string
  l: string
}

interface Fonts {
  size: Fontsizes
}

interface Colors {
  default: string
  info: string
  error: string
  success: string
  white: string
}

interface Borders {
  default: string
}

export interface GnmmiTheme {
  fonts: Fonts
  colors: Colors
  borders: Borders
}

declare module 'styled-components' {
  export interface DefaultTheme extends GnmmiTheme {}
}