// Custom hooks must be prefixed with the word "use"
// You need not import React from "react" library

import { useState, useEffect } from "react";

// My custom fetch will fetch the given url. Once the data is
// loaded, it will return the data after it triggers a re-render
export const useMyFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    // getData function is implemented inside useEffect.
    // Not doing so will trigger an eslint warning in the console.
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            }
            catch (err) {
                console.error("Error occured while fetching data");
                console.error(err)
            }
        };
        getData();
    }, [url]);

    // This custom hooks returns the loading state and the data
    return { isLoading, data };
};