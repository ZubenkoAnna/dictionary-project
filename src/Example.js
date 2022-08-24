import React from "react";

import "./Meaning.css";

export default function Example(props) {
  if (props.result) {
    return <div className="example">{props.result}</div>;
  } else {
    return null;
  }
}
