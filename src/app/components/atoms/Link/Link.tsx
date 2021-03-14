import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom'

import React, { FC } from 'react'

interface LinkProps {
  to?: string
  href?: string
  target?: string
}

export const Link: FC<LinkProps> = ({ to, href, target, children }) => {
  if (to) {
    return <ReactRouterLink to={to}>{children}</ReactRouterLink>
  }

  return (
    <a href={href} target={target}>
      {children}
    </a>
  )
}
