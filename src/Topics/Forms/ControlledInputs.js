// A simple design approach to handle few inputs.
// Each input is assigned a useState hook.
// For forms with many inputs, see component MultipleInputs.

import React, { useState } from 'react';

const ControlledInputs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form is not submitted")
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Name: </label>
            <input
              onChange={handleNameChange}
              value={name}
              type="text" id="userName" name="userName"></input>
          </div>
          <div>
            <label htmlFor="userEmail">Email: </label>
            <input
              onChange={handleEmailChange}
              value={email}
              type="text" id="userEmail" name="userEmail"></input>
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
        <div>
          <label>Name: {name}</label>
        </div>
        <div>
          <label>Email: {email}</label>
        </div>
      </article>
    </>
  );
};

export default ControlledInputs;
