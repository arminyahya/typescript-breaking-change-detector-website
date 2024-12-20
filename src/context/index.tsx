import React from "react";

const AppContext = React.createContext({
   breakingChangeCheckResult: '',
   setBreakingChangeCheckResult: (result: string) => {}
});

export default AppContext;