import { useState, useEffect } from "react";

const UseEffect = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((prevValue) => {
      return prevValue + 1;
    });
  };

  useEffect(() => {
    console.log("useEffect ran");
    if (value > 0) {
      document.title = `New message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log("render");

  return (
    <>
      <h1>UseEffect Basics</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default UseEffect;
