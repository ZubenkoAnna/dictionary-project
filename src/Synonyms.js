import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.result.synonyms) {
    return (
      <ul className="synonyms">
        {props.result.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
