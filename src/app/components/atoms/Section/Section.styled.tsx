import { Colors } from '@/style/themes/styled'
import styled, { ThemeConsumer } from 'styled-components'

interface StyledSectionProps {
  color: keyof Colors
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(props) => props.theme.colors[props.color]};
`
