import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

import React, { FC } from 'react'

import { GlobalStyle } from '@/style/GlobalStyle'
import { defaultTheme } from '@/style/themes/default'

import i18n from './config/i18next'
import { ApplicationRouter } from './routes/ApplicationRouter'

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle {...defaultTheme} />
      <I18nextProvider i18n={i18n}>
        <ApplicationRouter />
      </I18nextProvider>
    </ThemeProvider>
  )
}
