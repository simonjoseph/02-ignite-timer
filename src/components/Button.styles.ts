import styled, {css} from "styled-components"

export type ButtonVariant = 'primary' |'secondary' | 'danger' |'success'

interface ButtonContainerProps {
    varient: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    margin: 8px;
    padding: 8px;

    border-radius: 8px;

    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white}

    /* ${props => {
        return css`background-color: ${buttonVariants[props.varient]}`
    }} */
`