import { Button } from '@/components/atoms/Button/Button'
import { Headline } from '@/components/atoms/Typo/Headline'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from '@/components/organims/Navigation/Navigation'
import { StyledHeaderElements, StyledHeaderContainer } from './Header.styled'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation('general')
  return (
    <StyledHeaderContainer>
      <Headline level='3'>{t('header.welcome')}</Headline>
      <StyledHeaderElements>
        <Button>Enter the matrix</Button>
        <Button>Enter the mutrix</Button>
        <Button>Enter the motrix</Button>
      </StyledHeaderElements>
      <Navigation />
    </StyledHeaderContainer>
  )
}
