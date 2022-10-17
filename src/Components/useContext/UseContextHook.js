import React, { createContext } from 'react'
import C from "./C"

export const newValue = createContext();
const UseContextHook = () => {
    return (
        <div>
            <newValue.Provider value={"Telugu skill hub"}>
                <C />
            </newValue.Provider>
        </div>
    )
}

export default UseContextHook
