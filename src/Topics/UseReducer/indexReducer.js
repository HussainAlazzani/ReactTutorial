import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { teamOne } from '../../teams';

const IndexReducer = () => {
    const [name, setName] = useState("");
    const [team, setTeam] = useState(teamOne);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setShowModal(true);
            setTeam([...team, { id: new Date().getTime().toString(), name }]);
            setName("");
        }
        else {
            setShowModal(true)
        }
    };

    return (
        <>
            {showModal && <Modal />}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>

            {team.map(member => {
                return (
                    <div key={member.id}>
                        <h3>{member.name}</h3>
                    </div>
                )
            })}
        </>
    );
};

export default IndexReducer;
