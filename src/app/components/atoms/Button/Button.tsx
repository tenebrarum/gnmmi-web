import styled, { css } from 'styled-components'

import React, { FC, MouseEventHandler } from 'react'

export const StyledButton = styled.button`
  ${(props) => css`
    background: ${props.theme.colors.white};
    border: ${props.theme.borders.default};
    border-radius: ${props.theme.borders.radius};
  `}
`

export interface ButtonProps {
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
