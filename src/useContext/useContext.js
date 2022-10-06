import React, { useState, useContext } from "react";
import { data } from "../data/data";

const PersonContext = React.createContext();

const UseContext = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  // two components - Probider, consumer
  return (
    <PersonContext.Provider value={{ removeItem, people }}>
      <h2>Context API/ UseContext</h2>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} person={person} />;
      })}
      ;
    </>
  );
};

const SinglePerson = ({ person }) => {
  const { id, name } = person;
  const { removeItem } = useContext(PersonContext);
  return (
    <>
      <div className='item'>
        <h2>{name}</h2>
        <button
          onClick={() => removeItem(id)}
          style={{
            color: "blueviolet",
            border: "none",
            background: "transparent",
            letterSpacing: ".15rem",
            cursor: "pointer",
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default UseContext;
