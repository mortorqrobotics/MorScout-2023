import CommentBox from "Components/General/CommentBox";
import LargeButton from "Components/General/LargeButton";
import SmallButton from "Components/General/SmallButton";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./MatchScout.css";

function MatchScout() {
  let { match, team } = useParams();
  let { state } = useLocation();
  let { user } = state;

  return (
    <div className="MatchScout">
      <p>MATCH SCOUT</p>
      <LargeButton>Auto</LargeButton>
      <LargeButton>Teleop</LargeButton>
      <CommentBox></CommentBox>
      <SmallButton>EXPORT QR</SmallButton>
      <SmallButton>SUBMIT FORM</SmallButton>
    </div>
  );
}

export default MatchScout;
