import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/style/themes/default'
import { MainPage } from '@/pages/MainPage/MainPage'
import { GlobalStyle } from '@/style/GlobalStyle'

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle {...defaultTheme} />
      <MainPage />
    </ThemeProvider>
  )
}
