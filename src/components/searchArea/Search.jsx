import { useState } from "react";
import SearchBar from "material-ui-search-bar";

import "./_search.scss";

//import "./Search.css";

export default function Search({ inputText, setInputText }) {
  const [results, setResults] = useState();

  return (
    <div className="search">
      <i className="bx bx-search"></i>
      <input type="search" placeholder="Search..." value={inputText} />

      {/*
      <SearchBar
        className="search__input MuiPaper-elevation1"
        value={results}
        onChange={(value) => setResults(value)}
        placeholder="Search..."
        closeIcon={
          <button className="closeIcon" onClick={() => setResults("")}>
            X
          </button>
        }
      />
      */}
    </div>
  );
}
