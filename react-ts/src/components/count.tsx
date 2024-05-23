import { useReducer } from "react"


type stateType = {
    count: number
}
type actionType =
    | { type: "Increment", payload: number }
    | { type: "Decrement", payload: number };

const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload }
        case "Decrement":
            return { count: state.count - action.payload }
        default:
            return state;
    }
}

const initialState: stateType = {
    count: 0
}
function App() {
    const [state, Dispatch] = useReducer(reducer, initialState)
    const Increment = (): void => {
        Dispatch({
            type: "Increment",
            payload: 1
        })
    }
    const Decrement = (): void => {
        Dispatch({
            type: "Decrement",
            payload: 1
        })
    }
    return (
        <>
            <div>Hello</div>
            <p>Count:{state.count}</p>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>

        </>
    )
}

export default App
