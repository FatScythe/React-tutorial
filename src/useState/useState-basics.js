import React, { useState } from "react";

const Example = () => {
  let [title, setTitle] = useState("Random title");
  function handleClick() {
    title === "Random title"
      ? setTitle("Hello People")
      : setTitle("Random title");
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>useState Basic Example</h1>
      <h1>{title}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default Example;
