import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Phonetic from "./Phonetic";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <Synonyms results={meaning.synonyms} />
              <Antonyms result={meaning.antonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
