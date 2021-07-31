import styled from 'styled-components'

import React, { FC } from 'react'

import { Button } from '@/components/atoms/Button/Button'
import { Headline } from '@/components/atoms/Typo/Headline'
import { Navigation } from '@/components/organims/Navigation/Navigation'

export const StyledHeaderElements = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props) => props.theme.spacing.s};
`

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border: ${(props) => props.theme.borders.default};
  padding: ${(props) => props.theme.spacing.s};

  * {
    margin: 0 ${(props) => props.theme.spacing.s};
  }
`

export const Header: FC = () => {
  return (
    <StyledHeaderContainer>
      <Headline level="3">Welcome to GNMMI.de</Headline>
      <StyledHeaderElements>
        <Button>Enter the matrix</Button>
        <Button>Enter the mutrix</Button>
        <Button>Enter the motrix</Button>
      </StyledHeaderElements>
      <Navigation />
    </StyledHeaderContainer>
  )
}
