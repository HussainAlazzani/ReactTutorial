import React, { useState, useEffect } from 'react';

// To simulate a slow loading 
const sleep = milliseconds => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


const ConditionalRendering = () => {
    // Fetch conditions: loading state or error state 
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');

    // Async functions must be implemented inside useEffect because it's synchronous.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/HussainAlazzani");
                if (response.status >= 200 && response.status < 300) {
                    const userData = await response.json();
                    sleep(5000);
                    setUser(userData.login);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (isLoading)
        return <h1>Loading...</h1>
    if (isError)
        return <h1>Error....</h1>

    return <h1>{user}</h1>
};

export default ConditionalRendering;
