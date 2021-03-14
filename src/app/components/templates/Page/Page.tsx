import React, { FC } from 'react'

import { Footer } from '@/components/organims/Footer/Footer'
import { Header } from '@/components/organims/Header/Header'

interface PageProps {}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
