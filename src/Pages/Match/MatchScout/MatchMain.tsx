import CommentBox from "Components/General/CommentBox";
import LargeButton from "Components/General/LargeButton";
import SmallButton from "Components/General/SmallButton";
import Slider from "Components/General/Slider";
import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./MatchMain.css";
import { MatchContext, Page } from "./MatchScout";
import StarSelector from "Components/General/StarSelector";

function MatchMain() {
  let { user, match, team, setPage } = useContext(MatchContext);

  return (
    <div className="MatchMain">
      <p className="matchScoutText">MATCH SCOUT</p>
      <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Auto</LargeButton>
      <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Teleop</LargeButton>
      <p className="matchDefenseText">DEFENSE</p>
      <StarSelector></StarSelector>
      <CommentBox></CommentBox>
      <SmallButton>EXPORT QR</SmallButton>
      <SmallButton>SUBMIT FORM</SmallButton>
    </div>
  );
}

export default MatchMain;
