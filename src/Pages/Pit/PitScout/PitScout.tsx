import { CommunityState } from "Components/General/Community";
import { defaultCommunity } from "Pages/Match/MatchScout/MatchScout";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./PitScout.css";
import PitScoutCommunity from "./PitScoutCommunity";
import PitScoutMain from "./PitScoutMain";
import deepClone from "lodash.clonedeep";

enum PitPages {
  IdealCommunity,
  Main,
}

interface FormValuesPit {
  team_number?: string;
  scouter?: string;
  weight?: string;
  drivetrain?: string;
  scoring_position?: string;
  preferred_game_piece?: string;
  intake?: boolean;
  knocked_over_cones?: string;
  preferred_pickup_area?: string;
  preferred_substation?: string;
  auto_community?: number;
  auto_charge_station?: string;
  ideal_community?: CommunityState;
  end_game?: string;
  defense?: number;
  comments?: string;
}

type PitKeys = keyof FormValuesPit;

interface PitContext extends FormValuesPit {
  page?: PitPages;
  setPage: any;
  updateFormValue: (valueKey: PitKeys, newValue: FormValuesPit[PitKeys]) => void;
}

const PitContext = React.createContext<PitContext>({ setPage: "", updateFormValue: () => {} });

function PitScout() {
  let { team: team_number, user: scouter } = useParams();
  let [page, setPage] = useState(PitPages.Main);
  let [formValues, setFormValues] = useState<FormValuesPit>({
    team_number,
    scouter,
    weight: "",
    drivetrain: "",
    scoring_position: "",
    preferred_game_piece: "",
    intake: false,
    knocked_over_cones: "",
    preferred_pickup_area: "",
    preferred_substation: "",
    auto_community: 0,
    auto_charge_station: "",
    ideal_community: defaultCommunity,
    end_game: "",
    defense: 0,
    comments: "",
  });

  let updateFormValue = (valueKey: PitKeys, newValue: FormValuesPit[PitKeys]) => {
    let newFormValues = deepClone(formValues) as any;
    newFormValues[valueKey] = newValue;
    setFormValues(newFormValues);
  };

  return (
    <div className="PitScout">
      <PitContext.Provider value={{ ...formValues, setPage, updateFormValue }}>
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
