import React from "react";
import { data } from "../data/data";
import { useHistory } from "react-router-dom";
const People = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <Person
            {...person}
            key={person.id}
            people={people}
            removeItem={removeItem}
          />
        );
      })}
    </>
  );
};

const Person = ({ id, name, removeItem }) => {
  const history = useHistory();

  const handleLink = () => {
    history.push(`person/${id}`);
  };
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button
        // onClick={() => removeItem(id)}
        onClick={handleLink}
        style={{
          color: "blueviolet",
          border: "none",
          background: "transparent",
          letterSpacing: ".15rem",
          cursor: "pointer",
        }}
      >
        more...
      </button>
    </div>
  );
};

export default People;
