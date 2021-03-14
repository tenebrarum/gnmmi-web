import React, { FC, useState } from 'react'

import { Button } from '@/components/atoms/Button/Button'

import { NavigationList } from './NavigationList'

interface Navigation {}

export const Navigation: FC<Navigation> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
      {isOpen && <NavigationList />}
    </div>
  )
}
