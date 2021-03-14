
import React, { FC } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { SuspenseRoute } from '@/components/templates/SuspenseRoute/SuspenseRoute'

const MainPage = React.lazy(() => import('@/pages/MainPage/MainPage'))

export const ApplicationRouter: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
          <SuspenseRoute path={AppRoutes.ROOT}>
            <MainPage />
          </SuspenseRoute>
      </Switch>
    </BrowserRouter>
  )
}