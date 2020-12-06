import React, { useState, useEffect } from "react";
import { teamOne } from "../../teams";
import { useParams } from "react-router-dom";

const Player = () => {
    const [name, setName] = useState("");
    const { id } = useParams();
    
    // useParams gives us access to the paramters of the path
    // It will return them as string, hence need to convert to int
    useEffect(() => {
        const newPlayer = teamOne.find(player => {
            return player.id === parseInt(id);
        });
        setName(newPlayer.name);
    }, []);

    return (
        <div>
            <h2>{id}</h2>
            <h2>Hello, my name is {name}</h2>
        </div>
    );
};

export default Player;