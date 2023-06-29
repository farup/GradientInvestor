import { createContext, useReducer, ChangeEvent, ReactElement, useCallback, useContext } from "react";

// Define the state type 
type StateType = {
    inputValue: string,
}

// Define initial state 
export const initState: StateType = { inputValue: "AAPL" }

// Define action types
const enum REDUCER_ACTION_TYPE {
    SETINPUTVALE,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

// Define reducer function 
const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.SETINPUTVALE:
            return { ...state, inputValue: action.payload ?? "" }
        default:
            throw new Error()
    }
}

const useStockContext = (initState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const handleSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        dispatch({
            type: REDUCER_ACTION_TYPE.SETINPUTVALE,
            payload: e.target.value
        }), [])
    return { state, handleSearchInput }
}



type UseStockContextType = ReturnType<typeof useStockContext>

const initContextState: UseStockContextType = {
    state: initState,
    handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => { }
}

export const StockContext = createContext(initContextState)



type ChildrenType = {
    children?: ReactElement[] | undefined
}

export const StockProivder = ({ children, ...initState }: ChildrenType & StateType) => {
    return <StockContext.Provider value={useStockContext(initState)}>{children}</StockContext.Provider>
}

type UseStockHookType = {
    inputValue: string,
    handleSearchInput: () => void

}

type useInputValueType =
    {
        inputValue: string,
        handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void,
    }

export const useStockText = (): useInputValueType => {
    const { state: { inputValue }, handleSearchInput } = useContext(StockContext)
    return { inputValue, handleSearchInput }
}

