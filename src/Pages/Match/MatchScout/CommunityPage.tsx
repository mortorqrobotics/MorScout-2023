import React, { useContext } from "react";
import "./CommunityPage.css";
import Community, { CommunityState } from "Components/General/Community";
import SmallButton from "Components/General/SmallButton";
import { MatchContext, Page } from "./MatchScout";

function CommunityPage() {
  let { setPage, auto_community } = useContext(MatchContext);

  return (
    <div className="CommunityPage">
      <Community defaultCommunity={auto_community as CommunityState}></Community>
      <SmallButton onClick={() => setPage(Page.Main)}>DONE</SmallButton>
    </div>
  );
}

export default CommunityPage;
