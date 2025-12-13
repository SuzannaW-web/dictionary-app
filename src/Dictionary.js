import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import "./Results.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  let apiKey = "3o03ae1d8at693bf40d8fb4c10733055";

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="SearchInput"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </form>

      <Results results={results} />
    </div>
  );
}
