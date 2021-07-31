import styled from 'styled-components'

import React, { FC } from 'react'

import { Link } from '@/components/atoms/Link/Link'
import { Section } from '@/components/atoms/Section/Section'
import { AppRoutes } from '@/routes/AppRoutes'

export const StyledFooterSection = styled(Section)`
  border: ${(props) => props.theme.borders.default};
  padding: ${(props) => props.theme.spacing.s};
`

export const Footer: FC = () => {
  return (
    <footer>
      <StyledFooterSection color="white">
        <Link to={AppRoutes.ROOT}>This is a footer</Link>
      </StyledFooterSection>
    </footer>
  )
}
