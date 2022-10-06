import { useState } from "react";

const MultipleInput = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState();
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   email: "",
  //   age: "",
  // });
  // const [people, setPeople] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (person.firstName && person.email && person.age) {
  //     const newPerson = { ...person, id: Math.random() * 1000 };

  //     setPeople((oldPeople) => {
  //       return [...oldPeople, newPerson];
  //     });
  //     setPerson({ firstName: "", email: "", age: "" });
  //   } else {
  //     console.log("cannot be empty");
  //   }
  // };
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setPerson({ ...person, [name]: value });
  // };

  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("space cannot be empty");
    }
  };

  return (
    <>
      <h1>Multiple Input</h1>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'> Name :</label>
            <input
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'> Email :</label>
            <input
              id='email'
              name='email'
              type='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'> Age :</label>
            <input
              id='age'
              name='age'
              type='number'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add person
          </button>
        </form>
      </article>

      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div className='item' key={id}>
            <h3>
              {firstName}, {age}
            </h3>
            <h3>{email}</h3>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInput;
