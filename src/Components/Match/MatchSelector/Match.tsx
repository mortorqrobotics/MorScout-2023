import React from "react";
import "./Match.css";
import SmallMarker from "./SmallMarker";

interface Props {
  match: number;
  teams: string[];
}

function Match({ match, teams }: Props) {
  return (
    <div className="Match">
      <SmallMarker isRed={false} to={`/match/${match}/${teams[0]}/login`}>
        {teams[0]}
      </SmallMarker>
      <SmallMarker isRed={false} to={`/match/${match}/${teams[1]}/login`}>
        {teams[1]}
      </SmallMarker>
      <SmallMarker isRed={false} to={`/match/${match}/${teams[2]}/login`}>
        {teams[2]}
      </SmallMarker>
      <SmallMarker to={`/match/${match}/${teams[3]}/login`}>{teams[3]}</SmallMarker>
      <SmallMarker to={`/match/${match}/${teams[4]}/login`}>{teams[4]}</SmallMarker>
      <SmallMarker to={`/match/${match}/${teams[5]}/login`}>{teams[5]}</SmallMarker>
    </div>
  );
}

export default Match;
