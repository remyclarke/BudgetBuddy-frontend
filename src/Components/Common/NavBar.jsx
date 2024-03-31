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

  async function handleLogout() {
    localStorage.removeItem("token");

    await setToggleLogin(false);

    navigate("/login");
  }

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
          <>
            <span>Teatime, {user.username}</span>
            <Link
              onClick={handleLogout}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="p2">Logout</p>
            </Link>
          </>
        )}
      </article>
    </div>
  );
};

export default NavBar;
