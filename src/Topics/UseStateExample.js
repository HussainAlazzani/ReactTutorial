import React, { useState } from 'react';
import { teamOne, teamTwo } from "../teams";

// useState:
// 1. It preserves state values
// 2. It trigers re-render

const UseStateExample = () => {

    // Using hooks for string types
    let [title, setTitle] = useState("Initial title");
    const handleClickTitle = () => {
        if (title === "Initial title")
            title = setTitle("New title");
        else
            title = setTitle("Initial title");
    };

    // Using hooks for array types
    let [team, setTeam] = useState(teamOne);
    const handleClickTeam = () => {
        if (team === teamOne)
            team = setTeam(teamTwo);
        else
            team = setTeam(teamOne);
    };


    // Using hooks for object types
    let oldManager = {
        name: "Andre",
        age: 54,
        position: "senior",
        message: "Thank you",
    };

    // Always use a spread operator when manipulating
    // objects in order to preserve the object
    let [manager, setManager] = useState(oldManager);
    const handleClickManager = () => {
        manager = setManager({
            ...oldManager,
            name: "Carlos",
            age: 43,
            position: "Middle",
        });
    };

    // Hooks with function types. This may be the prefered method
    // when using all data types bcuz it can manipulate current
    // states as shown below in the complexDelayedCounter.
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };

    // 
    // This function will increase count after 2 seconds
    // by adding 1 to the value when clicked, then display it after 2 seconds.
    // If value changes during the waiting period, it will be overwritten.
    const simpleDelayedCounter = () => {
        setTimeout(() => {
            setValue(value + 1)
        }, 2000);
    };

    // This function will increase the count after 2 seconds.
    // It will add 1 to the current value because we are passing it to the function.
    const complexDelayedCounter = () => {
        setTimeout(() => {
            setValue((prevValue) => prevValue + 1)
        }, 2000);
    };

    return (
        <React.Fragment>
            <section>
                {/* Hooks with strings */}
                <h2>{title}</h2>
                <button type="button" className="btn" onClick={handleClickTitle}>
                    Change title
      </button>
            </section>
            <hr />

            <section>
                {/* Hooks with arrays: */}
                {team.map((member) => {
                    return <h2 key={member.id}>{member.name}</h2>
                })}
                <button type="button" className="btn" onClick={handleClickTeam}>
                    Change team
      </button>
            </section>
            <hr />

            <section>
                {/* Hooks with objects: */}
                <h2>{manager.name}</h2>
                <h2>{manager.age}</h2>
                <h2>{manager.position}</h2>
                <h2>{manager.message}</h2>
                <button type="button" className="btn" onClick={handleClickManager}>
                    Change manager
        </button>
            </section>
            <hr />

            {/* Hooks with functions */}
            <section>
                <h2>Counter</h2>
                <h2>{value}</h2>
                <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
                <button className="btn" onClick={reset}>reset</button>
                <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
                <button className="btn" onClick={simpleDelayedCounter}>Increase after 2 seconds</button>
                <button className="btn" onClick={complexDelayedCounter}>Increase after 2 seconds</button>
            </section>
        </React.Fragment>
    )
};

export default UseStateExample;
