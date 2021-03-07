import React, { FC } from 'react'

export interface NavigationItemProps {
  label: string
  icon?: string
}

export const NavigationItem: FC<NavigationItemProps> = ({ label, icon }) => {
  return (
    <a>{label}</a>
  )
}
