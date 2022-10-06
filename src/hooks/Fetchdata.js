import useFetch from "./useFetch";

const FetchProducts = () => {
  // https://jsonplaceholder.typicode.com/todos/
  const url = "https://course-api.com/react-prop-types-example";
  const { loading, data } = useFetch(url);
  console.log(loading, data);

  return (
    <>
      <h1>UseFetch</h1>
      <h2>{loading && "Loading..."}</h2>
      <h2>{data ? "data" : ""}</h2>
    </>
  );
};

export default FetchProducts;
