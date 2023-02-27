import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./PitScout.css";
import PitScoutCommunity from "./PitScoutCommunity";
import PitScoutMain from "./PitScoutMain";

enum PitPages {
  IdealCommunity,
  Main,
}

interface PitContext {
  page?: PitPages;
  team?: string;
  user?: string;
  setPage: any;
}

const PitContext = React.createContext<PitContext>({ setPage: "" });

function PitScout() {
  let { team } = useParams();
  let { state } = useLocation();
  let { user } = state;
  let [page, setPage] = useState(PitPages.Main);

  return (
    <div className="PitScout">
      <PitContext.Provider value={{ team, user, setPage }}>
        {page == PitPages.Main ? (
          <PitScoutMain></PitScoutMain>
        ) : (
          <PitScoutCommunity></PitScoutCommunity>
        )}
      </PitContext.Provider>
    </div>
  );
}

export default PitScout;
export { PitContext, PitPages };
