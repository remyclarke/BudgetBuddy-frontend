import React from "react";
import { Link } from "react-router-dom";

const Teapot = ({ teapot }) => {
  return (
    <Link
      to={`/teapots/${teapot.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <section className="teapot-card">
        <img src={teapot.image} alt={teapot.name} />
        <h3>{teapot.name}</h3>
        <p>
          <span>Price:</span> ${teapot.price}.00
        </p>
      </section>
    </Link>
  );
};

export default Teapot;
