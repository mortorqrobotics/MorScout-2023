import React, { useContext } from "react";
import "./CommunityPage.css";
import Community, { CommunityState } from "Components/General/Community";
import SmallButton from "Components/General/SmallButton";
import { defaultCommunity, MatchContext, Page } from "./MatchScout";
import isEqual from "lodash.isequal";

interface Props {
  page: Page;
}

function CommunityPage({ page }: Props) {
  let { setPage, auto_community, teleop_community, updateFormValue } = useContext(MatchContext);

  let handleChange = (newState: CommunityState) => {
    updateFormValue(page, newState);
  };

  let chooseCommunity = (): CommunityState => {
    if (page === Page.AutoCommunity) return auto_community as CommunityState;
    return teleop_community as CommunityState;
  };

  return (
    <div className="CommunityPage">
      <Community defaultCommunity={chooseCommunity()} handleChange={handleChange}></Community>
      <SmallButton onClick={() => setPage(Page.Main)}>DONE</SmallButton>
    </div>
  );
}

export default CommunityPage;
