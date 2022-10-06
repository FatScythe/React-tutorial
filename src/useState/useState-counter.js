import { useState } from "react";

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleReset = () => {
    setValue(0);
  };
  const handleComplexCounter = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevValue) => prevValue + 1);
    }, 2000);
  };
  return (
    <>
      <h2>UseState Counter Example</h2>
      <section style={{ margin: "1rem 0" }}>
        <h2>Regular Counter</h2>
        <h3 style={{ fontSize: "3rem" }}>{value}</h3>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: "1rem 0" }}>
        <h2>More Complex Counter</h2>
        <h3 style={{ fontSize: "3rem" }}>{value}</h3>
        <button className='btn' onClick={handleComplexCounter}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default useStateCounter;
