import { useState } from "react";

const ControlledInput = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((oldPeople) => {
        return [...oldPeople, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("enter a string");
    }
  };

  return (
    <>
      <h1>Controlled Input</h1>
      <h2>Form</h2>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'> Name :</label>
            <input
              id='firstName'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name='firstName'
              type='text'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'> Email :</label>
            <input
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add person
          </button>
        </form>
      </article>

      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className='item' key={id}>
            <h3>{firstName}</h3>
            <h3>{email}</h3>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInput;
