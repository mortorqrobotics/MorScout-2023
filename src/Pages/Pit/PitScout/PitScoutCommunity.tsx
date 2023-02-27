import React, { useContext } from "react";
import "./PitScoutCommunity.css";
import Community from "Components/General/Community";
import SmallButton from "Components/General/SmallButton";
import { PitContext, PitPages } from "./PitScout";

function PitScoutCommunity() {
  let { setPage } = useContext(PitContext);

  return (
    <div className="PitScoutCommunity">
      <Community></Community>
      <SmallButton onClick={() => setPage(PitPages.Main)}>DONE</SmallButton>
    </div>
  );
}

export default PitScoutCommunity;
