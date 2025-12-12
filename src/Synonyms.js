import React from "react";

export default function (props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym} </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
