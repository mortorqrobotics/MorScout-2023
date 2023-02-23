import React from "react";
import "./Match.css";
import SmallMarker from "./SmallMarker";

interface Props {
  match: number;
  teamNumber: string;
}

function Match({ match, teamNumber }: Props) {
  return (
    <div className="Match">
      <SmallMarker isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
      <SmallMarker isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
      <SmallMarker isRed={false} to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
      <SmallMarker to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
      <SmallMarker to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
      <SmallMarker to={`/match/${match}/${teamNumber}/login`}>
        {teamNumber}
      </SmallMarker>
    </div>
  );
}

export default Match;
