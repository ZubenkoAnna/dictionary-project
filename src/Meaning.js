import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <section className="section">
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <ul>
                <li>
                  <Definition result={definition.definition} />
                </li>
                <Example result={definition.example} />
              </ul>
            </div>
          );
        })}

        <Synonyms result={props.meaning} />
      </section>
    </div>
  );
}
