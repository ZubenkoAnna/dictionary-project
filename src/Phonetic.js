import React from "react";

export default function Phonetic(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <p>{props.phonetic.text}</p>;
    </div>
  );
}
