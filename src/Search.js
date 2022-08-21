import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

import "./Search.css";

export default function Search() {
  let [keyworld, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function handelResponse(response) {
    setResult(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyworld}`;
    axios.get(apiURL).then(handelResponse);
  }

  function handelSubmitWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="Search">
        <form className="input-group mb-3" onSubmit={searchWord}>
          <input
            placeholder="Enter a world"
            type="search"
            className="form-control"
            onChange={handelSubmitWord}
          />
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </form>
      </div>
      <Result results={result} />
    </div>
  );
}
