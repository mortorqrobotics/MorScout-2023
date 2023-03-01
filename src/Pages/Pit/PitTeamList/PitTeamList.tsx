import React from "react";
import "./PitTeamList.css";
import SmallButton from "Components/General/SmallButton";
import { useNavigate } from "react-router-dom";
import useTeams from "Hooks/useTeams";

function PitTeamList() {
  let navigate = useNavigate();
  let teams = useTeams();

  return (
    <div className="PitTeamList">
      <p>TEAMS</p>
      <div className="pitTeams">
        {teams.map((team, i) => {
          return (
            <SmallButton
              onClick={() => navigate(`/pit/${team}/login`)}
              key={i + team[0]}
            >{`Team ${team}`}</SmallButton>
          );
        })}
      </div>
    </div>
  );
}

export default PitTeamList;
