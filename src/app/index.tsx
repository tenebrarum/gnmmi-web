import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../themes/default'
import { MainPage } from '@/pages/MainPage/MainPage'

export const App: FC = () => {
    return (<ThemeProvider theme={defaultTheme}><MainPage /></ThemeProvider>)
}
