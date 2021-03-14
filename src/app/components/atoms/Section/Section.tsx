import { StyledSection } from './Section.styled'
import { Colors } from '@/style/themes/styled'
import React, { FC } from 'react'

interface SectionProps {
  color?: keyof Colors
}

export const Section: FC<SectionProps> = ({ color = 'white', children }) => {
  return <StyledSection color={color}>{children}</StyledSection>
}
