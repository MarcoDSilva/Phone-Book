import React from "react";

const Persons = (props) => {
  return (
    <section>
      {props.filter().map((p) => (
        <p key={p.name}>
          {p.name} - {p.number}
        </p>
      ))}
    </section>
  );
};

export default Persons;