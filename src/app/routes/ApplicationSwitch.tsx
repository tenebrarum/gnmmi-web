import React, { FC } from 'react'

import { Routes, Route } from 'react-router-dom'

import { LoadingIndicator } from '@/components/atoms/LoadingIndicator/LoadingIndicator'

// Check mport { ErrorBoundary } from '@/components/templates/ErrorBoundary/ErrorBoundary'

import { AppRoutes } from './AppRoutes'

const MainPage = React.lazy(() => import('@/pages/MainPage/MainPage'))
const AboutUsPage = React.lazy(() => import('@/pages/AboutUs/AboutUs'))
const ShopPage = React.lazy(() => import('@/pages/Shop/Shop'))

export const ApplicationSwitch: FC = () => {
  return (
    <React.Suspense fallback={<LoadingIndicator />}>
      <Routes>
        <Route path={AppRoutes.ROOT} element={ <MainPage />} />
        <Route path={AppRoutes.ABOUT_US} element={<AboutUsPage />} />
        <Route path={AppRoutes.SHOP} element={<ShopPage />} />
      </Routes>
    </React.Suspense>
  )
}
