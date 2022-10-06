import React from "react";
import { data } from "../data/data";

const useStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((el) => el.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1>useState Array Example</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
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
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default useStateArray;
