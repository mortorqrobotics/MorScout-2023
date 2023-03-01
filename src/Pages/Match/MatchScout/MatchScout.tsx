import React, { useState } from "react";
import "./MatchScout.css";
import MatchMain from "./MatchMain";
import { useLocation, useParams } from "react-router-dom";
import CommunityPage from "./CommunityPage";
import clone from "lodash.clonedeep";
import type { CommunityRow, CommunityState } from "Components/General/Community";

interface FormValues {
  team_number?: string;
  match_number?: string;
  scouter?: string;
  auto_community?: CommunityState;
  teleop_community?: CommunityState;
  defense?: number;
  comment?: string;
}

interface MatchContext extends FormValues {
  setPage: any;
  updateFormValue: any;
  submitForm: any;
}

// TODO: FIX THIS
const MatchContext = React.createContext<MatchContext>({
  setPage: "",
  updateFormValue: "",
  submitForm: "",
});

enum Page {
  AutoCommunity = "auto_community",
  TeleopCommunity = "teleop_community",
  Main = "main",
}

type FormValueKeys = keyof FormValues;

let defaultCommunity = {
  B: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
  M: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
  T: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
};

function MatchScout() {
  let { match: match_number, team: team_number, user: scouter } = useParams();
  let [page, setPage] = useState(Page.Main);

  let [formValues, setFormValues] = useState<FormValues>({
    team_number,
    match_number,
    scouter,
    auto_community: defaultCommunity,
    teleop_community: defaultCommunity,
    defense: 0,
    comment: "",
  });

  let submitForm = () => {
    console.log(formValues);
  };

  let updateFormValue = (valueKey: FormValueKeys, newValue: any) => {
    let newFormValues = clone(formValues) as any;
    newFormValues[valueKey] = newValue;
    setFormValues(newFormValues);
  };

  return (
    <div className="MatchScout">
      <MatchContext.Provider value={{ ...formValues, setPage, updateFormValue, submitForm }}>
        {page === Page.Main ? (
          <MatchMain></MatchMain>
        ) : page == Page.TeleopCommunity ? (
          <CommunityPage page={page}></CommunityPage>
        ) : (
          <CommunityPage page={page}></CommunityPage>
        )}
      </MatchContext.Provider>
    </div>
  );
}

export default MatchScout;
export { MatchContext, Page, defaultCommunity };
