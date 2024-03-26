import { useState, useEffect } from "react";
import Teapot from "../Teapots/Teapot.jsx";
import SearchBar from "./SearchBar.jsx";
import "./Teapots.css";
const URL = import.meta.env.VITE_BASE_URL;

const Teapots = () => {
  const [teapots, setTeapots] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/teapots`)
      .then((res) => res.json())
      .then((data) => setTeapots(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="teapot-container">
      <SearchBar teapots={teapots}/>
      <h2>All Teapots</h2>
      {teapots.map((teapot) => {
        return <Teapot key={teapot.id} teapot={teapot} />;
      })}
    </div>
  );
};

export default Teapots;
