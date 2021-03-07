import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { defaultTheme } from '@/style/themes/default'
import { MainPage } from '@/pages/MainPage/MainPage'
import { GlobalStyle } from '@/style/GlobalStyle'
import i18n from './config/i18next'

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle {...defaultTheme} />
        <MainPage />
      </I18nextProvider>
    </ThemeProvider>
  )
}
