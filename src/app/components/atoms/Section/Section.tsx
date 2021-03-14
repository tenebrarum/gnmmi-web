import React, { FC } from 'react'

import { Colors } from '@/style/themes/styled'

import { StyledSection } from './Section.styled'

interface SectionProps {
  className?: string
  color?: keyof Colors
}

export const Section: FC<SectionProps> = ({ className, color = 'white', children }) => {
  return <StyledSection className={className} color={color}>{children}</StyledSection>
}
