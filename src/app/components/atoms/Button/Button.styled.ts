import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${(props) => `
        fontSize: ${props.theme.fonts.size.m};
        background: ${props.theme.colors.white};
        border: ${props.theme.borders.default};
    `}
`
