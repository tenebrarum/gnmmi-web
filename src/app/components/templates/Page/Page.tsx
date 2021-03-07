import { Header } from '@/components/organims/Header/Header'
import React, { FC } from 'react'

interface PageProps {

}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}