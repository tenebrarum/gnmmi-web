import { BrowserRouter, Switch } from 'react-router-dom'

import React, { FC } from 'react'

import { SuspenseRoute } from '@/components/templates/SuspenseRoute/SuspenseRoute'

import { AppRoutes } from './AppRoutes'

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
