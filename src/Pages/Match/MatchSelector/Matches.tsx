import Heading from "Components/Match/MatchSelector/Heading";
import Match from "Components/Match/MatchSelector/Match";
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
            <Match match={i + 1} teamNumber="1515"></Match>
          </div>
        );
      })}
    </div>
  );
}

export default Matches;
