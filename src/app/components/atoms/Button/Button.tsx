import { ButtonProps } from './Button.interface'
import { StyledButton } from './Button.styled'
import React, { FC } from 'react'

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
