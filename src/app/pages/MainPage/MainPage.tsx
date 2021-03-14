import { GodView } from '@/components/organims/godview/GodView'
import { Page } from '@/components/templates/Page/Page'
import * as React from 'react'

export const MainPage: React.FC = () => {
  return (
    <Page>
      <GodView giphyUrl="https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif" />
    </Page>
  )
}

export default MainPage
