import React from "react";
import "./Match.css";
import SmallButton from "./SmallButton";

function Match() {
  return (
    <div className="Match">
      <SmallButton isRed={false}>1515</SmallButton>
      <SmallButton isRed={false}>1515</SmallButton>
      <SmallButton isRed={false}>1515</SmallButton>
      <SmallButton>1515</SmallButton>
      <SmallButton>1515</SmallButton>
      <SmallButton>1515</SmallButton>
    </div>
  );
}

export default Match;
