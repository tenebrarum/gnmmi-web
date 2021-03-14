import { Section } from "@/components/atoms/Section/Section"
import styled from "styled-components"

export const StyledFooterSection = styled(Section)`
  border: ${(props) => props.theme.borders.default};
  padding: ${(props) => props.theme.spacing.s};
`