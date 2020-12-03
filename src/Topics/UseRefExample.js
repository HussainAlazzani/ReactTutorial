import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef } from 'react';

// useEffect is similar to useState in that it preserves
// states but it doesn't trigger a re-render.
// Useful for targeting (ie. referencing) DOM nodes/elements.

// Getting the value of the input element.
const UseRefExample = () => {
    // useRef returns an object with property current
    // with an initial value set to null i.e. {current: null}
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer)                   // {current: input}
        console.log(refContainer.current);          // <input text="text" />
        console.log(refContainer.current.value);    // logs the inputted text
    };

    // Will only run once since useRef doesn't re-render
    useEffect (() => {
        // Focus on the node that is referenced by useRef
        refContainer.current.focus();
    });

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/* useRef targets this input element */}
                <input type="text" ref={refContainer}/>

                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default UseRefExample;
