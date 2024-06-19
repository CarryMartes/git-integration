import {Suspense} from "react";
import {Loader} from "@/shared";

export default function Layout({children}: any) {
    return <Suspense fallback={<div>Loading...</div>}>
        {children}
    </Suspense>
}