import { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstVal = text || "or";
  const secVal = text && "and";

  const handleToggle = () => {
    setIsError(!isError);
  };

  return (
    <>
      {/* <h1>{firstVal}</h1>
      <h1>{secVal}</h1> */}
      <button className='btn' onClick={handleToggle}>
        Toggle Error
      </button>
      {/* <h1>{text || "John doe"}</h1>
      {!text && <h1>"Hello World"</h1>} */}
      {isError && <h1>"Error..."</h1>}
      {isError ? (
        <h1>"There is an Error..."</h1>
      ) : (
        <h1>"There is no Error..."</h1>
      )}
    </>
  );

  //   const [Loading, setLoading] = useState(true);
  //   const [isError, setIsError] = useState(false);
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mojombo")
  //       .then((res) => {
  //         if (!res.ok) {
  //           setLoading(false);
  //           setIsError(true);
  //           throw new Error("failed to fetch data");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setLoading(false);
  //         const { login, id, avatar_url } = data;
  //         setData({ login, id, avatar_url });
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setIsError(true);
  //         console.log(err.message);
  //       });
  //   }, []);

  //   return (
  //     <>
  //       <h1>Short Circuit</h1>
  //       {isError && <h1>Error....</h1>}
  //       {Loading && <h1>Loading....</h1>}
  //       {data && (
  //         <div>
  //           <h1>{data.login}</h1>
  //           <p>No:{data.id}</p>
  //           <a href={data.avatar_url}>Profie Link</a>
  //         </div>
  //       )}
  //     </>
  //   );
};

export default ShortCircuit;
