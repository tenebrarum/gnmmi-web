import { globalTheme } from './globalTheme'
import { GnmmiTheme } from './styled'

export const defaultTheme: GnmmiTheme = {
  ...globalTheme,
  colors: {
    default: '#000000',
    info: 'grey',
    error: 'red',
    success: 'green',
    white: '#ffffff',
  },
  borders: {
    default: '2px solid #000000',
    radius: '25px',
  },
}
