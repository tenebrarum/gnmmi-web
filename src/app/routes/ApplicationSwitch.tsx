import React, { FC } from 'react'

import { Switch } from 'react-router-dom'

import { SuspenseRoute } from '@/components/templates/SuspenseRoute/SuspenseRoute'

import { AppRoutes } from './AppRoutes'

const MainPage = React.lazy(() => import('@/pages/MainPage/MainPage'))
const AboutUsPage = React.lazy(() => import('@/pages/AboutUs/AboutUs'))
const ShopPage = React.lazy(() => import('@/pages/Shop/Shop'))

export const ApplicationSwitch: FC = () => {
  return (
    <Switch>
      <SuspenseRoute path={AppRoutes.ROOT} exact>
        <MainPage />
      </SuspenseRoute>
      <SuspenseRoute path={AppRoutes.ABOUT_US} exact>
        <AboutUsPage />
      </SuspenseRoute>
      <SuspenseRoute path={AppRoutes.SHOP} exact>
        <ShopPage />
      </SuspenseRoute>
    </Switch>
  )
}
