import React, { FC } from 'react'

import {
  StyledHeadlineH3,
  StyledHeadlineH2,
  StyledHeadlineH1,
} from './Headline.styled'

interface HeadlineProps {
  level?: '1' | '2' | '3'
  children: React.ReactNode
}

export const Headline: FC<HeadlineProps> = ({
  level = '1',
  children,
}: HeadlineProps) => {
  if (level === '3') {
    return <StyledHeadlineH3>{children}</StyledHeadlineH3>
  }

  if (level === '2') {
    return <StyledHeadlineH2>{children}</StyledHeadlineH2>
  }

  return <StyledHeadlineH1>{children}</StyledHeadlineH1>
}
