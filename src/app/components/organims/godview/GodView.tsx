import { Button } from '@/components/atoms/Button/Button'
import * as React from 'react'

interface GodViewProps {
  giphyUrl: string
}

export const GodView: React.FC<GodViewProps> = ({ giphyUrl }) => {
  return (
    <div className="gnmmi__gif-of-the-day-view">
      <img src={giphyUrl} />
    </div>
  )
}
