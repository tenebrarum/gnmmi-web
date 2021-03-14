import { Link } from '@/components/atoms/Link/Link'
import { Section } from '@/components/atoms/Section/Section'
import { AppRoutes } from '@/routes/AppRoutes'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation('general')
  return (
    <Section color="error">
      <Link to={AppRoutes.ROOT}>This is a test</Link>
    </Section>
  )
}
