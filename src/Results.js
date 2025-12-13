import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) return null;

  const definitionCount = props.results.meanings.length;

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h3 className="phonetics">/{props.results.phonetic}/</h3>

        <p className="DefinitionCount">
          {props.results.meanings.length}{" "}
          {props.results.meanings.length === 1 ? "definition" : "definitions"}
        </p>

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
