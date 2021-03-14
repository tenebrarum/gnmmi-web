import React, { FC } from 'react'

import { ButtonProps } from './Button.interface'
import { StyledButton } from './Button.styled'

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
