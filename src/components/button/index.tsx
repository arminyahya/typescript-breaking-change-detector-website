import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;
}

export default function Button({ children, ...restProps }: Props) {
    return (
        <button className="bg-primary p-4 rounded-md" {...restProps}>{children}</button>
    )
}