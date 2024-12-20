import AppContext from "@/context";
import { useState } from "react";

export default function clientLayout({ children }: { children: React.ReactNode }) {
    const [breakingChangeCheckResult, setBreakingChangeCheckResult] = useState('');
    return (
        <AppContext.Provider value={{
            breakingChangeCheckResult,
            setBreakingChangeCheckResult
        }}>
            {children}
        </AppContext.Provider>
    )
}