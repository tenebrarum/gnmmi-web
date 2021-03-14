import React, { FC } from 'react'
import { Link } from '@/components/atoms/Link/Link'

export interface NavigationItemProps {
  label: string
  icon?: string
  to: string
}

export const NavigationItem: FC<NavigationItemProps> = ({ label, icon, to }) => {
  return <Link to={to}>&gt; {label}</Link>
}
