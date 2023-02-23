import Heading from "Components/Match/Heading";
import Match from "Components/Match/Match";
import React from "react";
import "./Matches.css";

function Matches() {
  return (
    <div className="Matches">
      <p className="matchesTitleText">MATCHES</p>
      <Heading>MATCH 1</Heading>
      <Match></Match>
    </div>
  );
}

export default Matches;
