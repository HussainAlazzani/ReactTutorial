// The component calling useContext will re-render when the context value changes

import React, { useContext, useState } from "react";

const themes = {
    light: {
        backgroundColor: "#ffffff",
        color: "#000000"
    },
    dark: {
        backgroundColor: "#000000",
        color: "#ffffff"
    }
};

const ThemeContext = React.createContext();

const UseContextExample = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        if (theme === themes.light)
            setTheme(themes.dark);
        else
            setTheme(themes.light);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <br />
            <Box />
        </ThemeContext.Provider>
    );
};

// We need not pass the theme value through this mid-level theme.
const Box = () => {
    return (
        <div style={{ padding: "2rem", backgroundColor: "grey" }}>
            <ThemedButton />
        </div>
    );
};

// The theme value is passed via the useContext
const ThemedButton = () => {
    // useContext will re-render when ThemeContext changes
    const theme = useContext(ThemeContext);

    return (
        <button className="btn" style={theme}>
            Click me
        </button>
    );
};

export default UseContextExample;
