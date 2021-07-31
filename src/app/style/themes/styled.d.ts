import 'styled-components'

interface Sizes {
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

interface Fonts {
  size: Sizes
}

export interface Colors {
  default: string
  info: string
  error: string
  success: string
  white: string
}

interface Borders {
  default: string
  radius: string
}

export interface GlobalTheme {
  fonts: Fonts
  spacing: Sizes
}

export interface GnmmiTheme extends GlobalTheme {
  colors: Colors
  borders: Borders
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends GnmmiTheme {}
}
