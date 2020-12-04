// This example is taken from web dev simplified
// https://www.youtube.com/watch?v=kK_Wqx3RnHk

import React, { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo"
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => {
                return todo.id !== action.payload.id
            });

        default:
            return todos;
    }
};

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false };
};

const UseReducerComplex = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // payload is the conventional object to pass
        // the values to perform the actions in reducer.
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    );
};

const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
};

export default UseReducerComplex;
