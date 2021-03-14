import { NavigationList } from './NavigationList'
import { Button } from '@/components/atoms/Button/Button'
import React, { FC, useState } from 'react'

interface Navigation {}

export const Navigation: FC<Navigation> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navItems = [
    { label: 'Shop' },
    { label: 'About us' },
    { label: 'Impressum' },
  ]

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
      {isOpen && <NavigationList navItems={navItems} />}
    </div>
  )
}
