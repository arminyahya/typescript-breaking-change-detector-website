import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

export default function Button({ children, className, ...restProps }: Props) {
    return (
        <button className={`flex justify-center items-center bg-primary p-4 rounded-md` + (className ? ` ${className}` : '')} {...restProps}>{children}</button>
    )
}