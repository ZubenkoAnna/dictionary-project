import React, { useState } from "react";

import "./Search.css";

export default function Search() {
  let [keyworld, setKeyword] = useState(null);
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching ${keyworld}`);
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
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
