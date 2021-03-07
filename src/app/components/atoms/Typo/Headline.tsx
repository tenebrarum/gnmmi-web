import React, { FC } from 'react'

interface HeadlineProps {
  level?: '1' | '2' | '3'
}

export const Headline: FC<HeadlineProps> = ({ level = '1', children }) => {

  if(level === '3') {
    return (<h3>{children}</h3>)
  }

  if(level === '2') {
    return (<h2>{children}</h2>)
  }

  return (
    <h1>
      {children}
    </h1>
  )
}