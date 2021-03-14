import { ThemeProvider } from 'styled-components'

import React, { FC } from 'react'

import { GlobalStyle } from '@/style/GlobalStyle'
import { defaultTheme } from '@/style/themes/default'

import { ApplicationSwitch } from './routes/ApplicationSwitch'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/organims/Header/Header'
import { Footer } from './components/organims/Footer/Footer'

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle {...defaultTheme} />
      <BrowserRouter>
        <Header />
        <ApplicationSwitch />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
