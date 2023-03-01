import CommentBox from "Components/General/CommentBox";
import LargeButton from "Components/General/LargeButton";
import SmallButton from "Components/General/SmallButton";
import Slider from "Components/General/Slider";
import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./MatchMain.css";
import { MatchContext, Page } from "./MatchScout";
import StarSelector from "Components/General/StarSelector";
import BackArrow from "Components/General/BackArrow";

function MatchMain() {
  let { defense, comment, setPage, updateFormValue, submitForm } =
    useContext<MatchContext>(MatchContext);

  return (
    <>
      <BackArrow></BackArrow>
      <div className="MatchMain">
        <p className="matchScoutText">MATCH SCOUT</p>
        <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Auto</LargeButton>
        <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Teleop</LargeButton>
        <p className="matchDefenseText">DEFENSE</p>
        <StarSelector
          defaultRating={defense}
          onChange={(rating) => updateFormValue("defense", rating)}
        ></StarSelector>
        <CommentBox onChange={(comment) => updateFormValue("comment", comment)}></CommentBox>
        <SmallButton>EXPORT QR</SmallButton>
        <SmallButton onClick={submitForm}>SUBMIT FORM</SmallButton>
      </div>
    </>
  );
}

export default MatchMain;
