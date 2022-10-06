import { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  function changeSize() {
    console.log("size changed");
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      console.log("clean-up Effect");
      window.removeEventListener("resize", changeSize);
    };
  }, [size]);
  return (
    <>
      <h1>UseEffect CleanUp</h1>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanUp;
