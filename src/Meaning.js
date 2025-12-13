import React, { useState } from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleVisibility() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="Meaning">
      <div className="MeaningHeader">
        <h3>{props.meaning.partOfSpeech}</h3>
        <button className="ToggleButton" onClick={toggleVisibility}>
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {isOpen && (
        <div className="MeaningContent">
          <p className="definition">{props.meaning.definition}</p>
          <p className="example">{props.meaning.example}</p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      )}
    </div>
  );
}
