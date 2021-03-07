import React, { FC } from 'react'
import { StyledButton } from './Button.styled'


export const Button: FC<ButtonProps> = ({ children }) => {
    return <StyledButton>{children}</StyledButton>
}