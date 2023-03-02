import CommentBox from "Components/General/CommentBox";
import LargeButton from "Components/General/LargeButton";
import SmallButton from "Components/General/SmallButton";
import React, { useContext, useState } from "react";
import "./MatchMain.css";
import { MatchContext, Page } from "./MatchScout";
import StarSelector from "Components/General/StarSelector";
import BackArrow from "Components/General/BackArrow";

function MatchMain() {
  let { defense, comment, setPage, updateFormValue, submitForm } =
    useContext<MatchContext>(MatchContext);

  let [submitted, setSubmitted] = useState(false);

  return (
    <>
      <BackArrow></BackArrow>
      <div className="MatchMain">
        <p className="matchScoutText">MATCH SCOUT</p>
        <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Auto</LargeButton>
        <LargeButton onClick={() => setPage(Page.TeleopCommunity)}>Teleop</LargeButton>
        <p className="matchDefenseText">DEFENSE</p>
        <StarSelector
          defaultRating={defense}
          onChange={(rating) => updateFormValue("defense", rating)}
        ></StarSelector>
        <CommentBox
          onChange={(comment) => updateFormValue("comment", comment)}
          defaultValue={comment}
        ></CommentBox>
        <SmallButton>EXPORT QR</SmallButton>
        <SmallButton
          onClick={() => {
            setSubmitted(true);
            submitForm();
          }}
          disabled={submitted}
        >
          SUBMIT FORM
        </SmallButton>
      </div>
    </>
  );
}

export default MatchMain;
