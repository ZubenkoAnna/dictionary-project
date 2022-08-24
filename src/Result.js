import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <section className="section">
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
