import React, { useState } from "react";
import "./MatchScout.css";
import MatchMain from "./MatchMain";
import { useLocation, useParams } from "react-router-dom";
import CommunityPage from "./CommunityPage";
import clone from "lodash.clonedeep";
import type { CommunityState } from "Components/General/Community";

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
  formValues: any;
}

// TODO: FIX THIS
const MatchContext = React.createContext<MatchContext>({
  setPage: "",
  updateFormValue: "",
  submitForm: "",
  formValues: "",
});

enum Page {
  AutoCommunity,
  TeleopCommunity,
  Main,
}

type FormValueKeys = keyof FormValues;

function MatchScout() {
  let { match: match_number, team: team_number } = useParams();
  let { state } = useLocation();
  let { user: scouter } = state;
  let [page, setPage] = useState(Page.Main);

  let [formValues, setFormValues] = useState<FormValues>({
    team_number,
    match_number,
    scouter,
    auto_community: undefined,
    teleop_community: undefined,
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
      <MatchContext.Provider
        value={{ ...formValues, setPage, updateFormValue, submitForm, formValues }}
      >
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
