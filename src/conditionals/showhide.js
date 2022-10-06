import { useEffect } from "react";
import { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  function handleToggle() {
    setShow(!show);
  }
  return (
    <>
      <h1>Show and Hide</h1>
      <button className='btn' onClick={handleToggle}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);
  return (
    <>
      <h2>Windows</h2>
      <h1>Size: {size}px</h1>
    </>
  );
};

export default ShowHide;
