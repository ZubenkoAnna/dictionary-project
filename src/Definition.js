import React from "react";

export default function Definition(props) {
  if (props.result) {
    return (
      <div>
        <strong>Definition: </strong>
        {props.result}
      </div>
    );
  } else {
    return null;
  }
}
