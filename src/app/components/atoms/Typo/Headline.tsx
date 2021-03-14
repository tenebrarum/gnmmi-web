import {
  StyledHeadlineH3,
  StyledHeadlineH2,
  StyledHeadlineH1,
} from './Headline.styled'
import React, { FC } from 'react'

interface HeadlineProps {
  level?: '1' | '2' | '3'
}

export const Headline: FC<HeadlineProps> = ({ level = '1', children }) => {
  if (level === '3') {
    return <StyledHeadlineH3>{children}</StyledHeadlineH3>
  }

  if (level === '2') {
    return <StyledHeadlineH2>{children}</StyledHeadlineH2>
  }

  return <StyledHeadlineH1>{children}</StyledHeadlineH1>
}
