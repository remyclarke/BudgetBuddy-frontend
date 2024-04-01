import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const URL = import.meta.env.VITE_BASE_URL;

const NavBar = ({ toggleLogin, setToggleLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!toggleLogin) setUser(null);

    if (toggleLogin) {
      const token = localStorage.getItem("token");
      if (token) {
        fetch(`${URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data.user);
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [toggleLogin]);

  return (
    <div className="navbar-container">
      <h1>Navbar Component</h1>

      <Link to={"/about"}>
        <p className="p1">About</p>
      </Link>
      {!toggleLogin ? (
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      ) : (
        <div>
          {user && <span>Hello, {user.username}? | </span>}
          <Link onClick={handleLogout}>
            <span>Logout</span>
          </Link>
        </div>
      )}
      <hr />
    </div>
  );
};

export default NavBar;
