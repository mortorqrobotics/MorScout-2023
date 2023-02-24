import React, { useReducer, useState } from "react";
import "./MatchScout.css";
import MatchMain from "./MatchMain";
import { useLocation, useParams } from "react-router-dom";
import CommunityPage from "./CommunityPage";

interface MatchContext {
  match?: string;
  team?: string;
  user?: string;
  setPage: any;
}

// TODO: FIX THIS
const MatchContext = React.createContext<MatchContext>({ setPage: "" });

enum Page {
  AutoCommunity,
  TeleopCommunity,
  Main,
}

function MatchScout() {
  let { match, team } = useParams();
  let { state } = useLocation();
  let { user } = state;
  let [page, setPage] = useState(Page.Main);

  return (
    <div className="MatchScout">
      <MatchContext.Provider value={{ match, team, user, setPage }}>
        {page === Page.Main ? (
          <MatchMain></MatchMain>
        ) : page == Page.TeleopCommunity ? (
          <CommunityPage></CommunityPage>
        ) : (
          <CommunityPage></CommunityPage>
        )}
      </MatchContext.Provider>
    </div>
  );
}

export default MatchScout;
export { MatchContext, Page };
