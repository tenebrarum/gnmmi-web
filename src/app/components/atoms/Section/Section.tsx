import React, { FC } from 'react'

import { Colors } from '@/style/themes/styled'

import { StyledSection } from './Section.styled'

interface SectionProps {
  color?: keyof Colors
}

export const Section: FC<SectionProps> = ({ color = 'white', children }) => {
  return <StyledSection color={color}>{children}</StyledSection>
}
