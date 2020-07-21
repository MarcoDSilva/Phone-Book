import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter.js";
import PersonForm from "./Components/PersonForm.js";
import Persons from "./Components/Persons.js";
import axios from 'axios'

const App = () => {
  // array of people and method to update it
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  // fetching api data 
  const hook = () => {
    axios.get('http://localhost:3001/persons').then(res => {
      console.log('promise fulfilled')
      setPersons(res.data)
    })
  }

  // aplying the data fetched with the hook
  useEffect(hook, [])

  const resetForm = () => {
    setNewName("");
    setNewPhone("");
  };

  //adding a new person to our state
  const addPerson = (e) => {
    e.preventDefault();
    console.log("clicked the btn", e.target);
   
    // we try to find if this new name already exists
    const nameExists = persons.find((n) => n.name === newName);

    // if the name exists, we alert the user and end this method
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
      resetForm();
      return;
    }

    const nameObj = {
      name: newName,
      number: newPhone,
    };

    setPersons(persons.concat(nameObj));
    resetForm();
  };

  // it gets the info from the input form
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  // we update the filter input here
  const handleFilter = (e) => {
    setNewFilter(e.target.value.toLowerCase());
  };

  // we return the persons states conforming the filter state.
  const filteredState = () => {
    if (newFilter === "") {
      return persons;
    } else {
      return persons.filter((a) => a.name.toLowerCase().includes(newFilter));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter} />

      <h2>Add a new:</h2>
      <PersonForm
        addPerson={addPerson}
        personName={newName}
        personHandler={handleNameChange}
        phoneNumber={newPhone}
        phoneHandler={handlePhoneChange}
      />

      <h2>Numbers:</h2>
      <Persons person={persons} filter={filteredState} />
    </div>
  );
};

export default App;
