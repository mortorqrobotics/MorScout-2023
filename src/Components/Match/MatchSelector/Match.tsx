import React from "react";
import "./Match.css";
import SmallButton from "./SmallButton";

interface Props {
  match: number;
  teamNumber: string;
}

function Match({ match, teamNumber }: Props) {
  return (
    <div className="Match">
      <SmallButton isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
      <SmallButton isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
      <SmallButton isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
      <SmallButton to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
      <SmallButton to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
      <SmallButton to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallButton>
    </div>
  );
}

export default Match;
