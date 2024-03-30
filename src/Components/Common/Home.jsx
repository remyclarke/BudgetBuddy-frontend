import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect } from "react";

const URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
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
