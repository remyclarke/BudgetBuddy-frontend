import { useState, useEffect} from "react";
import Teapot from "./Teapot";

const SearchBar = ({teapots}) => {
    const [searchInput, setSearchInput] = useState("");

  // Search bar text input
  function handleTextChange(event) {
    const input = event.target.value;
    setSearchInput(input);
  }
  function getSearchResults(){
    return teapots.filter((teapot) => {
        const { name, material } = teapot
        const nameMatch = name.toLowerCase().match(searchInput.toLowerCase())
        const materialMatch = material?.toLowerCase().match(searchInput.toLowerCase())
        return nameMatch || materialMatch
    })
  }
  const searchResults = getSearchResults()
  return (
    <div>
        <form className="search-input">
          <label htmlFor="searchInput">Search all teapots: </label>
          <input
            placeholder="enter search term"
            type="search"
            id="searchInput"
            onChange={handleTextChange}
            value={searchInput}
          />
        </form>
        <main>
            {searchInput.length > 0 && 
            searchResults.map((teapot) => <Teapot key={teapot.id} teapot={teapot} />) }
            </main>
    </div>
  )
}

export default SearchBar