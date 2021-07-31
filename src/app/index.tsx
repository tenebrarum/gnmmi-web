import { ThemeProvider } from 'styled-components'

import React, { FC } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from '@/style/GlobalStyle'
import { defaultTheme } from '@/style/themes/default'

import { Footer } from './components/organims/Footer/Footer'
import { Header } from './components/organims/Header/Header'
import { ApplicationSwitch } from './routes/ApplicationSwitch'

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
