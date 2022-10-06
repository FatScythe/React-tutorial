import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mojombo")
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          setIsError(true);
          throw new Error("failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        const { login, id, avatar_url } = data;
        setData({ login, id, avatar_url });
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        console.log(err.message);
      });
  }, []);

  console.log(data, "setdata");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <>
      <h1>{data.login}</h1>
      <p>No:{data.id}</p>
      <a href={data.avatar_url}>Profie Link</a>
    </>
  );
};

export default MultipleReturns;
