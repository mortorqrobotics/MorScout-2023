import { CommunityState } from "Components/General/Community";
import { defaultCommunity } from "Pages/Match/MatchScout/MatchScout";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  submitForm: () => void;
}

const PitContext = React.createContext<PitContext>({
  setPage: "",
  updateFormValue: () => {},
  submitForm: () => {},
});

function PitScout() {
  let navigate = useNavigate();
  let { team: team_number, user: scouter } = useParams();
  let [page, setPage] = useState(PitPages.Main);
  let [formValues, setFormValues] = useState<FormValuesPit>({
    team_number,
    scouter,
    weight: "",
    drivetrain: "Swerve Drive",
    scoring_position: "Bottom",
    preferred_game_piece: "Cone",
    intake: false,
    knocked_over_cones: "Only knocked",
    preferred_pickup_area: "Floor",
    preferred_substation: "Single substation",
    auto_community: 0,
    auto_charge_station: "None",
    ideal_community: defaultCommunity,
    end_game: "Docked",
    defense: 0,
    comments: "",
  });

  let updateFormValue = (valueKey: PitKeys, newValue: FormValuesPit[PitKeys]) => {
    let newFormValues = deepClone(formValues) as any;
    newFormValues[valueKey] = newValue;
    setFormValues(newFormValues);
  };

  let submitForm = async () => {
    let response = await fetch(
      `https://dcgnonpccjghlrgernjw.functions.supabase.co/server/api/pitScout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );
    if (response.status !== 200) return alert("Failed!");

    navigate("/");
  };

  return (
    <div className="PitScout">
      <PitContext.Provider value={{ ...formValues, setPage, updateFormValue, submitForm }}>
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
