import React from "react";

const PersonForm = ({addPerson, personName, personHandler, phoneNumber, phoneHandler}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={personName} onChange={personHandler} />
      </div>
      <div>
        number:
        <input value={phoneNumber} onChange={phoneHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
