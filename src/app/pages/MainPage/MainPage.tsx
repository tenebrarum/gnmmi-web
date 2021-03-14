import * as React from 'react'
import { GodView } from '@/components/organims/godview/GodView'
import { Page } from '@/components/templates/Page/Page'

export const MainPage: React.FC = () => {
  return (
    <Page>
      <GodView giphyUrl="https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif" />
    </Page>
  )
}

export default MainPage