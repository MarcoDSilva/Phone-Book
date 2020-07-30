import React from "react";

const Persons = ({ filter, deletePerson }) => {
  return (
    <section>
      {filter().map((p) => (
        <p key={p.id}>
          {p.name} - {p.number}{" "}
          <button onClick={() => deletePerson(p.id, p.name)}>delete</button>
        </p>
      ))}
    </section>
  );
};

export default Persons;
