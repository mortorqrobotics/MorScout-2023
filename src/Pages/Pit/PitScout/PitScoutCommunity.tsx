import React, { useContext } from "react";
import "./PitScoutCommunity.css";
import Community, { CommunityState } from "Components/General/Community";
import SmallButton from "Components/General/SmallButton";
import { PitContext, PitPages } from "./PitScout";

function PitScoutCommunity() {
  let { setPage, ideal_community, updateFormValue } = useContext(PitContext);

  return (
    <div className="PitScoutCommunity">
      <Community
        defaultCommunity={ideal_community as CommunityState}
        handleChange={(newCommunityState) => updateFormValue("ideal_community", newCommunityState)}
      ></Community>
      <SmallButton onClick={() => setPage(PitPages.Main)}>DONE</SmallButton>
    </div>
  );
}

export default PitScoutCommunity;
