import React, { FC } from 'react'

import { Link } from '@/components/atoms/Link/Link'
import { AppRoutes } from '@/routes/AppRoutes'
import { StyledFooterSection } from './Footer.styled'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <StyledFooterSection color="white">
        <Link to={AppRoutes.ROOT}>This is a footer</Link>
      </StyledFooterSection>
    </footer>
  )
}
