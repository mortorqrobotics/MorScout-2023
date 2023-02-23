import Heading from "Components/Match/Heading";
import Match from "Components/Match/Match";
import React from "react";
import "./Matches.css";

function Matches() {
  return (
    <div className="Matches">
      <p className="matchesTitleText">MATCHES</p>
      {new Array(10).fill(0).map((_, i) => {
        return (
          <div className="matchAndHeading" key={i}>
            <Heading>{`MATCH ${i + 1}`}</Heading>
            <Match></Match>
          </div>
        );
      })}
    </div>
  );
}

export default Matches;
