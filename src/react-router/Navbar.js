import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/About'>
          <li>About</li>
        </Link>
        <Link to='/People'>
          <li>People</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
