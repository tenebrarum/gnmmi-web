import styled from 'styled-components'

import React, { FC } from 'react'

import { Link as ReactRouterLink } from 'react-router-dom'

export const StyedLinkWrapper = styled.div<{ inline?: boolean }>`
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  * {
    text-decoration: none;
  }
`

interface LinkProps {
  to?: string
  href?: string
  target?: string
  inline?: boolean
  children: React.ReactNode
}

export const Link: FC<LinkProps> = ({
  to,
  href,
  target,
  children,
  inline,
}: LinkProps) => {
  if (to) {
    return (
      <StyedLinkWrapper inline={inline}>
        <ReactRouterLink to={to}>{children}</ReactRouterLink>
      </StyedLinkWrapper>
    )
  }

  return (
    <StyedLinkWrapper inline={inline}>
      <a href={href} target={target}>
        {children}
      </a>
    </StyedLinkWrapper>
  )
}
