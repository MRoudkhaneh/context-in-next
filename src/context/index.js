import React, {createContext, useReducer, useContext} from "react";
import {countReducer} from "./reducer";


const StateContext = createContext();
const DispatchContext = createContext();


const initialState = {
    filters: [
        {
            type: "location",
            name: "تهران",
            isChecked: true
        }
    ]
};


function CountProvider({children}) {

    const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}


export const useContextState = () => useContext(StateContext);
export const useContextDispatch = () => useContext(DispatchContext);
export default CountProvider;
