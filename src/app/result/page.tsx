'use client';

import AppContext from "@/context";
import { useContext } from "react";

export default function ResultPage() {
    const { breakingChangeCheckResult } = useContext(AppContext);

    return (
        <div className="h-full w-full">
            {breakingChangeCheckResult}
        </div>
    )
}