import Heading from "Components/Match/MatchSelector/Heading";
import Match from "Components/Match/MatchSelector/Match";
import useMatches from "Hooks/useMatches";
import React from "react";
import "./Matches.css";

function Matches() {
  let matches = useMatches();

  return (
    <div className="Matches">
      <p className="matchesTitleText">MATCHES</p>
      {matches.map((match, i) => {
        return (
          <div className="matchAndHeading" key={i}>
            <Heading>{`MATCH ${i + 1}`}</Heading>
            <Match match={i + 1} teams={match}></Match>
          </div>
        );
      })}
    </div>
  );
}

export default Matches;
