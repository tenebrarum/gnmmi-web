import styled, { css } from 'styled-components'

export const StyledHeadlineH1 = styled.h1`
  font-weight: 1000;
  font-size: ${props => props.theme.fonts.size.xxl};
`

export const StyledHeadlineH2 = styled.h2`
  font-weight: 800;
  font-size: ${props => props.theme.fonts.size.xl};
`

export const StyledHeadlineH3 = styled.h3`
  font-weight: 800;
  font-size: ${props => props.theme.fonts.size.l};
`
