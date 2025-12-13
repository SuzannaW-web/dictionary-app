import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
                <p className="PhotoCredit">
                  Photo by{" "}
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {photo.photographer}
                  </a>{" "}
                  on Pexels
                </p>
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
