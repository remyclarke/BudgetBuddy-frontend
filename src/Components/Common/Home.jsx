import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

const URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  useEffect(() => {
    // Fetch call to the root route of your backend to get the CSRF token
    fetch(`${URL}`, {
      credentials: "include", // Important: Include cookies in the request
    })
      .then((response) => {
        if (response.ok) {
          console.log("XSRF-Token cookie should now be set.");
        }
      })
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);
  

  return (
    <div className="home-div">
      <section className="steam-wrap">
        <article id="steam" className="steam-1"></article>
        <article id="steam" className="steam-2"></article>
        <article id="steam" className="steam-3"></article>
        <article id="steam" className="steam-4"></article>
      </section>
      <section className="logo">
        <Link to={"/teapots"}>
          <img
            src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711550529/TeaWhip-Logo-nobackground_battdo.png"
            alt="TeaWhips Logo"
          />
        </Link>
      </section>
    </div>
  );
};

export default Home;
