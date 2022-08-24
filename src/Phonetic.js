import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}

/*if (props.phonetic.phonetics[0].audio && props.phonetic.phonetics[0].text) {
    return (
      <div>
        <a
          href={props.phonetic.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        <p>{props.phonetic.phonetics[0].text}</p>
      </div>
    );
  } else {
    return (
      <div>
        <a
          href={props.phonetic.phonetics[1].audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
        <p>{props.phonetic.phonetics[1].text}</p>
      </div>
    );
  }
}*/
