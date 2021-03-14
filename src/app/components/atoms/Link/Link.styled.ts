import styled from 'styled-components'

interface StyledLinkWrapperProps {
  inline?: boolean
}

export const StyedLinkWrapper = styled.div<StyledLinkWrapperProps>`
  display: ${props => props.inline ? 'inline' : 'block'};
  * {
    text-decoration: none;
  }
`
