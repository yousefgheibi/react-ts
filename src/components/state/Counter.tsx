import { Fragment, useReducer } from "react";

const initalState = { count: 0 };

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initalState
        default:
            return state
    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <Fragment>
            Count : {state.count}

            <br />
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </Fragment>
    )
}