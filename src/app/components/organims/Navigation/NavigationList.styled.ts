import styled from 'styled-components'

export const StyledNavigationList = styled.div`
  ${(props) => `
        z-index: 10;
        position: fixed;
        right:  ${props.theme.spacing.s};
        background: ${props.theme.colors.white};
        border: ${props.theme.borders.default};
    `}
`
