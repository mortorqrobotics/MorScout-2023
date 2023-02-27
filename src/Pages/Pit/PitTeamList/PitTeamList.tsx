import React from "react";
import "./PitTeamList.css";
import SmallButton from "Components/General/SmallButton";
import { useNavigate } from "react-router-dom";

function PitTeamList() {
  let navigate = useNavigate();

  return (
    <div className="PitTeamList">
      <p>TEAMS</p>
      <div className="pitTeams">
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
        <SmallButton onClick={() => navigate(`/pit/${1515}/login`)}>Team 1515</SmallButton>
      </div>
    </div>
  );
}

export default PitTeamList;
