import CommentBox from "Components/General/CommentBox";
import LargeButton from "Components/General/LargeButton";
import SmallButton from "Components/General/SmallButton";
import Slider from "Components/General/Slider";
import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./MatchMain.css";
import { MatchContext, Page } from "./MatchScout";

function MatchMain() {
  let { user, match, team, setPage } = useContext(MatchContext);

  return (
    <div className="MatchMain">
      <p>MATCH SCOUT</p>
      <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Auto</LargeButton>
      <LargeButton onClick={() => setPage(Page.AutoCommunity)}>Teleop</LargeButton>
      <Slider></Slider>
      <CommentBox></CommentBox>
      <SmallButton>EXPORT QR</SmallButton>
      <SmallButton>SUBMIT FORM</SmallButton>
    </div>
  );
}

export default MatchMain;
