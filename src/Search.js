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
        <h3>What do you want to search?</h3>
        <form onSubmit={searchWord}>
          <div className="row">
            <span className="col-sm-9">
              <input
                type="search"
                placeholder="Type a word.."
                autoFocus="on"
                autoComplete="off"
                className="form-control"
                onChange={handelSubmitWord}
              />
            </span>
            <span className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary"
              />
            </span>
          </div>
        </form>
      </div>
      <Result results={result} />
    </div>
  );
}
