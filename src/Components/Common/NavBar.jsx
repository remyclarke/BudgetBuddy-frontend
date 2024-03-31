import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const URL = import.meta.env.VITE_BASE_URL;

const NavBar = ({ toggleLogin, setToggleLogin }) => {
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.removeItem("token");

    await setToggleLogin(false);

    navigate("/login");
  }

  const handleClick = () => {
    if (login) handleLogout();
    else setLogin(true);
  };

  return (
    <div className="navbar-container">
      <Link to={"/teapots"}>
        <h1>TeaWhips</h1>
      </Link>
      <article>
        <Link to={"/about"}>
          <p className="p1">About</p>
        </Link>
        {!toggleLogin ? (
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="p2">Login</p>
          </Link>
        ) : (
          <Link
            onClick={handleLogout}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="p2">Logout</p>
          </Link>
        )}
      </article>
    </div>
  );
};

export default NavBar;
