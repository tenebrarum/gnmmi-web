import styled from 'styled-components'

import React, { FC } from 'react'

import { Colors } from '@/style/themes/styled'

interface StyledSectionProps {
  color: keyof Colors
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
`

interface SectionProps {
  className?: string
  color?: keyof Colors
  children: React.ReactNode
}

export const Section: FC<SectionProps> = ({
  className,
  color = 'white',
  children,
}: SectionProps) => {
  return (
    <StyledSection className={className} color={color}>
      {children}
    </StyledSection>
  )
}
