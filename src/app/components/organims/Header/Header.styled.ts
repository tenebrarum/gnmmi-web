import styled from 'styled-components'

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
