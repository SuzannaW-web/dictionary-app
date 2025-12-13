import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import "./Results.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(null);

  function handleDictionaryResponse(response) {
    if (response.data && response.data.word) {
      setResults(response.data);
      setError(null);
    } else {
      setResults(null);
      setError("Word not found");
    }
  }

  function handlePexelsResponse(response) {
    if (response.data.photos.length > 0) {
      setPhotos(response.data.photos);
    } else {
      setPhotos([]);
    }
  }

  function search(event) {
    if (event) event.preventDefault();
    if (!keyword) return;

    setResults(null);
    setPhotos(null);
    setError(null);

    const apiKey = "3o03ae1d8at693bf40d8fb4c10733055";
    const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiURL)
      .then(handleDictionaryResponse)
      .catch(() => {
        setResults(null);
        setError("Word not found");
      });

    const pexelsApiKey =
      "MZyHmHAftzCsciC9FfGlbwAvsfbmtpO0RfStlyNgQBtVdDedUfOsGwDz";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    const headers = { Authorization: pexelsApiKey };

    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
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
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </form>

      {error && <p className="ErrorMessage">{error}</p>}

      <div className="container">
        <div className="row">
          {results && (
            <div className="col-12 col-md-6">
              <Results results={results} key={keyword} />
            </div>
          )}
          {photos && (
            <div className="col-12 col-md-6">
              <Photos photos={photos} key={keyword} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
