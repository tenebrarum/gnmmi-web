import React, { FC } from 'react'
import { StyledNavigationList } from './NavigationList.styled'

interface NavItem {
  label: string
  icon?: string
}

interface NavigationList {
  navItems: NavItem[]
}

export const NavigationList: FC<NavigationList> = ({ navItems }) => {
  return (
    <StyledNavigationList>
      {navItems.map(navItem => <div>
        {navItem.label}
      </div>)}
    </StyledNavigationList>
  )
}