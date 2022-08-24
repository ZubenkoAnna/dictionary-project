import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="app">
        <h1>Your Dictionary</h1>
      </div>
      <header>
        <Search />
      </header>
      <footer className="footer">
        <a
          href="https://github.com/ZubenkoAnna/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code,
        </a>{" "}
        by Anna Zubenko
      </footer>
    </div>
  );
}
