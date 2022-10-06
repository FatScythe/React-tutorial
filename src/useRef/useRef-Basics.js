import { useRef, useEffect } from "react";

// Preserves Value
// DOES NOT trigger Re-render
// target DOM nodes/ elements

const UseRef = () => {
  const inputContainer = useRef(null);
  const submitContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputContainer.current.value);
    console.log(submitContainer.current);
  };

  useEffect(() => {
    inputContainer.current.focus();
  });

  return (
    <>
      <h2>UseRef</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={inputContainer} />
          <button type='submit' ref={submitContainer}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRef;
