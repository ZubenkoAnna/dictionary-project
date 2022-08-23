import React from "react";

import Definition from "./Definition";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <Definition result={definition.definition} />
              <Example result={definition.example} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
