import { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";

const UseEffectFetchData = () => {
  // const users = useFetch("https://api.github.com/users");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <h1>UseEffect Fetch Data</h1>
      <h1>GitHub User</h1>
      <ul className='users'>
        {data.map((user) => (
          <li className='user-card' key={user.id}>
            <div className='user-img'>
              <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className='user-detail'>
              <h2>{user.login}</h2>
              <a className='btn' href={user.html_url}>
                Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
