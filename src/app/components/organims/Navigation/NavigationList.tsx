import React, { FC } from 'react'
import styled from 'styled-components'

import { AppRouterLinks } from '@/routes/AppRoutes'

import { NavigationItem, NavigationItemProps } from './NavigationItem'

const StyledNavigationList = styled.div`
  ${(props) => `
        z-index: 10;
        position: fixed;
        right:  ${props.theme.spacing.s};
        background: ${props.theme.colors.white};
        border: ${props.theme.borders.default};
        display: flex;
        flex-flow: column;
    `}
`

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
