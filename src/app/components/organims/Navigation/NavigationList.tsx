import React, { FC } from 'react'

import { AppRouterLinks } from '@/routes/AppRoutes'

import { NavigationItem, NavigationItemProps } from './NavigationItem'
import { StyledNavigationList } from './NavigationList.styled'


export const NavigationList: FC = () => {
  const navItems: NavigationItemProps[] = [
    { label: 'Shop', to: AppRouterLinks.SHOP },
    { label: 'About us', to: AppRouterLinks.ABOUT_US },
  ]
  return (
    <StyledNavigationList>
      {navItems.map((navItem) => (
        <NavigationItem key={navItem.label} {...navItem} />
      ))}
    </StyledNavigationList>
  )
}
