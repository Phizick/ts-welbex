import React from "react";
import stylesButton from './Button.module.css'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text: string,
    extraClass?: string
}
export const Button: React.FC<IButtonProps> = ({
    text,
    extraClass
}) => {
    return (
        <button className={`${stylesButton.btn} ${extraClass}`}>
            <p className={stylesButton.text}>{text}</p>
        </button>
    )
}