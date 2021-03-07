import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${(props) => `
        background: ${props.theme.colors.white};
        border: ${props.theme.borders.default};
        border-radius: ${props.theme.borders.radius};
    `}
`
