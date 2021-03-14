import styled, { css } from 'styled-components'

const createCommonHeadlineStyle = () => css`
  font-weight: 800;
`

export const StyledHeadlineH1 = styled.h1`
  ${createCommonHeadlineStyle()}
  font-size: ${props => props.theme.fonts.size.xxl};
`

export const StyledHeadlineH2 = styled.h2`
${createCommonHeadlineStyle()}
  font-size: ${props => props.theme.fonts.size.xl};
`

export const StyledHeadlineH3 = styled.h3`
${createCommonHeadlineStyle()}
  font-size: ${props => props.theme.fonts.size.l};
`
