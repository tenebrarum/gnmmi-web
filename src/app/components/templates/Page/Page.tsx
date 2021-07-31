import React, { FC } from 'react'

import { Footer } from '@/components/organims/Footer/Footer'
import { Header } from '@/components/organims/Header/Header'

interface PageProps {
  children: React.ReactNode
}

export const Page: FC<PageProps> = ({ children }: PageProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
