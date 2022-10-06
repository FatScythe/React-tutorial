import { useState } from "react";
import { data } from "../data/data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h2>Prop Drilling</h2>
      <List people={people} removeItem={removeItem} />
    </>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            person={person}
            removeItem={removeItem}
          />
        );
      })}
      ;
    </>
  );
};

const SinglePerson = ({ person, removeItem }) => {
  const { id, name } = person;
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

export default PropDrilling;
