import React from "react";

export default function Synonyms(props) {
  if (props.results) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <em>{props.results}</em>
      </div>
    );
  } else {
    return null;
  }
}
