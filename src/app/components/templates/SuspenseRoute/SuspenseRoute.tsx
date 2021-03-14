import React, { FC, PropsWithChildren } from 'react'
import { LoadingIndicator } from '@/components/atoms/LoadingIndicator/LoadingIndicator'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { Route } from 'react-router-dom'

interface SuspenseRouteProps {
  path: string
}

export const SuspenseRoute: FC<PropsWithChildren<SuspenseRouteProps>> = ({ children, path }) => {
  return (
    <Route path={path}>
      <ErrorBoundary>
        <React.Suspense fallback={<LoadingIndicator />}>
          {children}
        </React.Suspense>
      </ErrorBoundary>
    </Route>
  )
}