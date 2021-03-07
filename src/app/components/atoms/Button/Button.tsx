import React, { FC } from 'react'
import { StyledButton } from './Button.styled'
import { ButtonProps } from './Button.interface'

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
