import { Button } from '@/components/atoms/Button/Button'
import React, { FC, useState } from 'react'
import { NavigationList } from './NavigationList'

interface Navigation {
  
}

export const Navigation: FC<Navigation> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navItems = [{ label: 'Shop' }, { label: 'About us' }, { label: 'Impressum' }]

  return (
    <Button onClick={() => setIsOpen(!isOpen)}>
      Menu
      {isOpen && <NavigationList navItems={navItems} />}
    </Button>
  )
}