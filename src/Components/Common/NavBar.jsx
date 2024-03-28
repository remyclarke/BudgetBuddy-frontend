import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to={"/teapots"}>
        <h1>TeaWhips</h1>
      </Link>
      <article>
        <Link to={"/about"}>
          <p className="p1">About</p>
        </Link>
        <Link to={"/login"}>
          <p className="p2">Login</p>
        </Link>
      </article>
    </div>
  );
};

export default NavBar;
