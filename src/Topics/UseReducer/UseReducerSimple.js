// useReducer is useful for large apps with many states.
// This trivial example aims to present the structure and
// pattern required to use the useReducer hook.

import React, { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const UseReducerSimple = () => {
    // We can use a number 0 as an initial value but more often for
    // useReducer, we use an object or array to implement complex apps.
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => {
        dispatch({ type:ACTIONS.INCREMENT});
    };

    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT});
    };

    return (
        <>
            <button className="btn" onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button className="btn" onClick={increment}>+</button>
        </>
    );
};

export default UseReducerSimple;
