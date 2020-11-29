import React, { useState } from 'react';
import { teamOne, teamTwo } from "../../../teams";

const ErrorExample = () => {

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

  let [manager, setManager] = useState(oldManager);
  const handleClickManager = () => {
    manager = setManager({
      ...oldManager,
      name: "Carlos",
      age: 43,
      position: "Middle",
     });
  };

  return (
    <React.Fragment>
      {/* Hooks with strings */}
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClickTitle}>
        Change title
      </button>

      <hr />

      {/* Hooks with arrays: */}
      {team.map((member) => {
        return <h2 key={member.id}>{member.name}</h2>
      })}
      <button type="button" className="btn" onClick={handleClickTeam}>
        Change team
      </button>

      <hr />

      {/* Hooks with objects: */}
      <h2>{manager.name}</h2>
      <h2>{manager.age}</h2>
      <h2>{manager.position}</h2>
      <h2>{manager.message}</h2>
      <button type="button" className="btn" onClick={handleClickManager}>
        Change manager
      </button>

    </React.Fragment>
  )
};

export default ErrorExample;
