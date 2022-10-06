import { useState, useReducer } from "react";
import Modal from "./modal";
import { data } from "../data/data";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "hello world",
};

const UseReducer = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      const newPerson = { id: Math.random() * 1000, name };
      // Dispatch takes in an {action type and payload}
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  }

  const closeModal = () => {
    dispatch({ type: "ClOSE_MODAL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <h2>UseReducer</h2>

      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
        </div>
        <button type='submit'>Add</button>
      </form>

      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div className='item' key={id}>
              <h3>{name}</h3>
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
      })}
    </>
  );
};

export default UseReducer;
