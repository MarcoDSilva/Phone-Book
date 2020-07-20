import React from "react";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.personName} onChange={props.personHandler} />
      </div>
      <div>
        number:{" "}
        <input value={props.phoneNumber} onChange={props.phoneHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
