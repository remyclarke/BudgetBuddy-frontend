import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>TeaWhips</h1>
      <Link to={"/about"}>About</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default NavBar;
