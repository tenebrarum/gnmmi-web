import { Route } from 'react-router-dom'

import React, { FC, PropsWithChildren } from 'react'

import { LoadingIndicator } from '@/components/atoms/LoadingIndicator/LoadingIndicator'

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'

interface SuspenseRouteProps {
  path: string
  exact?: boolean
}

export const SuspenseRoute: FC<PropsWithChildren<SuspenseRouteProps>> = ({
  path,
  exact,
  children,
}) => {
  return (
    <Route path={path} exact={exact}>
      <ErrorBoundary>
        <React.Suspense fallback={<LoadingIndicator />}>
            {children}
        </React.Suspense>
      </ErrorBoundary>
    </Route>
  )
}
