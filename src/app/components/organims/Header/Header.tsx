import { Button } from '@/components/atoms/Button/Button'
import { Headline } from '@/components/atoms/Typo/Headline'
import React, { FC } from 'react'
import { Navigation } from '@/components/organims/Navigation/Navigation'
import { StyledHeaderElements, StyledHeaderContainer } from './Header.styled'

interface HeaderProps {
  
}

export const Header: FC<HeaderProps> = () => {
  return (
    <StyledHeaderContainer>
      <Headline>Welcome to GNMMI.de</Headline>
      <StyledHeaderElements>
        <Button>Enter the matrix</Button>
        <Button>Enter the matrix</Button>
        <Button>Enter the matrix</Button>
      </StyledHeaderElements>
      <Navigation />
    </StyledHeaderContainer>
  )
}