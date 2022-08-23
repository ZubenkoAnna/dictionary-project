import React from "react";

export default function Antonyms(props) {
  if (props.result) {
    return (
      <div>
        <strong>Antonyms: </strong>

        <em>{props.result}</em>
      </div>
    );
  } else {
    return null;
  }
}
