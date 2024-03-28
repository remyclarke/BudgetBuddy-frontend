import { useState, useEffect } from "react";
import Teapot from "../Teapots/Teapot.jsx";
import "./Teapots.css";
const URL = import.meta.env.VITE_BASE_URL;

const Teapots = () => {
  const [teapots, setTeapots] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Search bar text input
  function handleTextChange(event) {
    setSearchInput(event.target.value);
  }

  function getSearchResults() {
    return teapots.filter((teapot) => {
      const { name, material } = teapot;
      const nameMatch = name.toLowerCase().match(searchInput.toLowerCase());
      const materialMatch = material
        ?.toLowerCase()
        .match(searchInput.toLowerCase());
      return nameMatch || materialMatch;
    });
  }

  const searchResults = getSearchResults();
  const teapotsToShow = searchInput.length > 0 ? searchResults : teapots;

  useEffect(() => {
    fetch(`${URL}/api/teapots`)
      .then((res) => res.json())
      .then((data) => setTeapots(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="search-input">
        <form>
          <label htmlFor="searchInput">Search all teapots: </label>
          <input
            className="input-box"
            placeholder="enter search term"
            type="search"
            id="searchInput"
            onChange={handleTextChange}
            value={searchInput}
          />
        </form>
      </div>
      <div className="teapot-container">
        <h2>All Teapots</h2>
        {teapotsToShow.map((teapot) => {
          return <Teapot key={teapot.id} teapot={teapot} />;
        })}
      </div>
    </>
  );
};

export default Teapots;
