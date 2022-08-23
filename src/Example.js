import React from "react";

export default function Example(props) {
  if (props.result) {
    return (
      <div>
        <strong>Example: </strong>
        <em>{props.result}</em>
      </div>
    );
  } else {
    return null;
  }
}
