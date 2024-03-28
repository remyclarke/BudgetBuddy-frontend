import { Link, useNavigate} from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../Authorization/ProtectedRoute";
import { useEffect, useState } from "react";

const NavBar = ({toggleLogin, setToggleLogin}) => {
  const user = useAuth()
  const navigate = useNavigate()
  console.log(user)

  

  async function handleLogout() {
    const response = await fetch('http://localhost:3003/api/auth/logout', {
      method: 'GET', // or 'POST', depending on your backend
      credentials: 'include',
    })
    if (response.ok) {
      // Here, you should also clear any authentication state in your application
      // For example, if you're using a global state or context to track authentication
      // setIsAuthenticated(false);
      // setUser(null);
      setToggleLogin(!toggleLogin)
      navigate('/login')
    }
  }

 

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     // setIsLoading(true);
  //     try {
  //       const response = await fetch(`${URL}/api/auth/check-auth`, {
  //         credentials: "include", // Important: Include cookies in the request
  //       });
  //       if (response.ok) {
  //         const data = await response.json();

  //         console.log(data.isAuthenticated)
  //       // } else {
  //       //   // setIsLoading(false);
  //       //   // setIsAuthenticated(false);
  //       }
  //     } catch (error) {
  //       console.error("Error checking authentication:", error);
  //       // setIsAuthenticated(false);
  //       // setIsLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, []);

  

  return (
    <div className="navbar-container">
      <Link to={"/teapots"} style={{ textDecoration: "none", color: "black" }}>
        <h1>TeaWhips</h1>
      </Link>
      <article>
        <Link to={"/about"} style={{ textDecoration: "none", color: "black" }}>
          <p className="p1">About</p>
        </Link>
        {/* { !user.isAuthenticated && !user.isLoading ?  */}
        <Link to={!toggleLogin ? "/login" : "/dashboard"} style={{ textDecoration: "none", color: "black" }}>
          <p className="p2">{ !toggleLogin ? 'Login' : 'Logout'}</p>
        </Link>
        {/* } */}
      </article>
    </div>
  );
};

export default NavBar;
