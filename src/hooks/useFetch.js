import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch(url);
    const githubUsers = await response.json();
    setData(githubUsers);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};

export default useFetch;
