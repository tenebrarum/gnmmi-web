import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { LoadingIndicator } from '@/components/atoms/LoadingIndicator/LoadingIndicator'
import React, { FC, PropsWithChildren } from 'react'
import { Route } from 'react-router-dom'

interface SuspenseRouteProps {
  path: string
}

export const SuspenseRoute: FC<PropsWithChildren<SuspenseRouteProps>> = ({
  children,
  path,
}) => {
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
