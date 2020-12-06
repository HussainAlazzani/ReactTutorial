import React from "react";
import { Link } from "react-router-dom";
import { teamOne } from "../../teams";

const Players = () => {
    return (
        <div>
            <ul>
                {teamOne.map(player => {
                    return (
                            <li key={player.id}>
                                <div>
                                {player.name}
                            </div>
                                <div>
                                <Link to={`/player/${player.id}`}>Learn more</Link>
                            </div>
                            </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Players;