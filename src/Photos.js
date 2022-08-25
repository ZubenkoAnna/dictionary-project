import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <section>
        <div className="row">
          {props.photo.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photos.url} target="_blank" rel="noreferrer">
                  <img src={photos.src.landscape} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
