'use client'
import { useFormStatus } from 'react-dom'
import {Loader} from "@/shared";

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        pending ? <Loader /> : <button type="submit"
                                       className="
                    text-white bg-blue-800 font-medium
                     rounded-lg text-sm px-5
                     py-2.5 me-2 mb-2 ">
            Refresh Commits
        </button>

    )
}