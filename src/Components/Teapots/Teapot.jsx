import React from "react";
import { Link } from "react-router-dom"

const Teapot = ({ teapot }) => {
  return (
    <Link to={`/teapots/${teapot.id}`}>
      <h2>{teapot.name}</h2>
      <img src={teapot.image} alt={teapot.name} />
      <p><span>Price:</span> ${teapot.price}</p>
    </Link>
  )
};

export default Teapot;
