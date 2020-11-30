import React, { useState, useEffect } from 'react';

// useEffect can be used to change something outside the component, eg. page title.
// We can use many useEffect hooks.
// useEffect, by default, runs after every re-render.
// To change this behaviour, we add a second parameter.
// This parameter is of array type.
// [] = empty array means run useEffect only on initial render.
// [value] = run useEffect on initial render AND when value changes.
// the value can be changed using the useState hook.


// Your useEffect my need to implement a cleanup to avoid memory leaks.

const UseEffectExample = () => {

    // Keeping track of the browser window size
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => setSize(window.innerWidth);

    useEffect(() => {
        // When window size is changed, call checkSize which
        // in turn calls the setSize hook to update the state
        window.addEventListener("resize", checkSize);

        // Now implement a cleanup by removing the event listener
        // otherwise useEffect will be called every time size changes.
        // This trivial example can be implemented with an empty
        // dependency so that useEffect runs only on initial render.
        console.log("useEffect...")
        window.removeEventListener("resize", checkSize);
    });

    // Fetching data.
    // useEffect is not an async function; hence it cannot return a promise.
    // However, you can implement an async function inside it or outside of it.
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    // An empty dependency is necessary, otherwise data will be
    // fetched more than once. In this example, we will fall in
    // an infinite loop as follows:
    // useEffect -> getUsers -> fetch -> setUsers -> useEffect.
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>Window width: {size}</h2>
            <hr />
            <h2>Github users</h2>
            <ul className="users">
                {users.map(user => {
                    const { id, login, avatar_url, type } = user;
                    return <li key={id}>
                        <img src={avatar_url} alt="" />
                        <p>{login}<br />{type}</p>
                    </li>
                })}
            </ul>
        </>
    );
};

export default UseEffectExample;
