import React from "react";
import { useMyFetch } from "./useMyFetch"

const UsingMyFetchHook = () => {
    const { isLoading, data } = useMyFetch("https://api.github.com/users");
    console.log(data);
    return (
    <h1>{isLoading?"loading...":"display data here..."}</h1>
    );
};

export default UsingMyFetchHook;