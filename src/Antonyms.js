import React from "react";

export default function Antonyms(props) {
  if (props.result.antonyms) {
    return (
      <ul>
        {props.result.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
