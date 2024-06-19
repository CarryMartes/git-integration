import {InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<any> {
    label: string
    appendIcon?: React.ReactNode
}
export function Input({label, ...props}: IProps) {
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type="text"
                   className="bg-gray-50
                        border border-gray-300
                        text-gray-900 text-lg rounded-lg w-full pt-2 pb-2 pr-2 pl-2"
                   {...props}
                   />
        </>
    )
}