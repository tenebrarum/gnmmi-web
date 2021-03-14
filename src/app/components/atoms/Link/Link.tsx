import {
  Link as ReactRouterLink
} from 'react-router-dom'

import React, { FC } from 'react'
import { StyedLinkWrapper } from './Link.styled'

interface LinkProps {
  to?: string
  href?: string
  target?: string
  inline?: boolean
}

export const Link: FC<LinkProps> = ({ to, href, target, children, inline }) => {
  if (to) {
    return (<StyedLinkWrapper inline={inline}>
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
      </StyedLinkWrapper>)
  }

  return (
    <StyedLinkWrapper inline={inline}>
      <a href={href} target={target}>
        {children}
      </a>
    </StyedLinkWrapper>
  )
}
