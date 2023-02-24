import React, { useContext } from "react";
import "./CommunityPage.css";
import Community from "Components/General/Community";
import SmallButton from "Components/General/SmallButton";
import { MatchContext, Page } from "./MatchScout";

function CommunityPage() {
  let { setPage } = useContext(MatchContext);

  return (
    <div className="CommunityPage">
      <Community></Community>
      <SmallButton onClick={() => setPage(Page.Main)}>DONE</SmallButton>
    </div>
  );
}

export default CommunityPage;
