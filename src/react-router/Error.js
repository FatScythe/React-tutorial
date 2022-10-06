import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404! Page Not Found </h1>
      <Link to='/' className='btn'>
        Go back Home
      </Link>
    </>
  );
};

export default Error;
