import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="steam-wrap">
        <article id="steam" className="steam-1"></article>
        <article id="steam" className="steam-2"></article>
        <article id="steam" className="steam-3"></article>
        <article id="steam" className="steam-4"></article>
      </section>
      <img
        className="logo"
        src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711479225/TeaWhipsLanding2_mwgzcu.png"
        alt="TeaWhips Logo"
      />
    </div>
  );
};

export default Home;
