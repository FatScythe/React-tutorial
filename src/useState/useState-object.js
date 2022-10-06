import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Fahm",
    age: "23",
    message: "you must make it",
  });
  const handleChange = () => {
    setPerson({ ...person, message: "you must make it!!!" });
  };
  console.log(person);
  return (
    <>
      <h2>UseState Object Example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={handleChange}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
