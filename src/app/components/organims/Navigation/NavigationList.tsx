import { NavigationItem, NavigationItemProps } from './NavigationItem'
import { StyledNavigationList } from './NavigationList.styled'
import React, { FC } from 'react'

interface NavigationListProps {
  navItems: NavigationItemProps[]
}

export const NavigationList: FC<NavigationListProps> = ({ navItems }) => {
  return (
    <StyledNavigationList>
      {navItems.map((navItem) => (
        <NavigationItem {...navItem} />
      ))}
    </StyledNavigationList>
  )
}
