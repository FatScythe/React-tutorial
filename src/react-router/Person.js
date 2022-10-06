import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { data } from "../data/data";
const Person = () => {
  const { id } = useParams();
  const history = useHistory();
  const [person, setPerson] = useState("Person Pikin");
  //   console.log(typeof id);

  useEffect(() => {
    const newPerson = data.find((person) => {
      return person.id === parseInt(id);
    });
    setPerson(newPerson);
  }, []);

  return (
    <>
      <h1>Person {id}</h1>
      <h2>{person.name}</h2>
      <button className='btn' onClick={() => history.go(-1)}>
        Go back
      </button>
    </>
  );
};

export default Person;
