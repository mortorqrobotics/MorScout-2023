import React, { useContext } from "react";
import "./PitScoutMain.css";
import { useParams } from "react-router-dom";
import InputBox from "Components/General/InputBox";
import type { ReactNode } from "react";
import Dropdown from "Components/General/Dropdown";
import StarSelector from "Components/General/StarSelector";
import CommentBox from "Components/General/CommentBox";
import SmallButton from "Components/General/SmallButton";
import { PitContext, PitPages } from "./PitScout";
import BackArrow from "Components/General/BackArrow";

function PitScoutMain() {
  let { team, setPage } = useContext(PitContext);

  return (
    <>
      <BackArrow></BackArrow>
      <div className="PitScoutMain">
        <h1>PIT SCOUT</h1>

        <LabeledComponent text={"WEIGHT (LBS):"}>
          <InputBox updateText={() => {}}></InputBox>
        </LabeledComponent>
        <LabeledComponent text={"DRIVETRAIN:"}>
          <Dropdown options={["Swerve Drive", "West coast/Tank drive", "Omni", "Mecanum"]} />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED SCORING POSITION:"}>
          <Dropdown options={["Bottom", "Middle", "Top", "No preference"]} />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED GAME PIECE:"}>
          <Dropdown options={["Cone", "Cube", "No preference"]} />
        </LabeledComponent>
        <LabeledComponent text={"INTAKE?"}>
          <Dropdown options={["Yes", "No"]} />
        </LabeledComponent>
        <LabeledComponent text={"KNOCKED OVER CONES?"}>
          <Dropdown
            options={[
              "Only knocked",
              "Only standing",
              "Prefer knocked",
              "Prefer standing",
              "No preference",
            ]}
          />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED PICKUP AREA"}>
          <Dropdown options={["Floor", "Substation platform", "No preference"]} />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED SUBSTATION"}>
          <Dropdown options={["Single substation", "Double substation", "No preference"]} />
        </LabeledComponent>
        <LabeledComponent text={"PIECES SCORED IN AUTO:"}>
          <Dropdown options={new Array(8).fill(0).map((_, i) => (i + 1).toString())} />
        </LabeledComponent>
        <LabeledComponent text={"AUTO CHARGE STATION:"}>
          <Dropdown options={["Docked", "Engaged", "None"]} />
        </LabeledComponent>
        <LabeledComponent text={"IDEAL INDIVIDUAL GAME:"}>
          <SmallButton onClick={() => setPage(PitPages.IdealCommunity)}>TO GRID</SmallButton>
        </LabeledComponent>
        <LabeledComponent text={"DEFENSE SCORE:"}>
          <StarSelector></StarSelector>
        </LabeledComponent>
        <LabeledComponent text={"GENERAL COMMENTS:"}>
          <CommentBox useLabel={false}></CommentBox>
        </LabeledComponent>

        <SmallButton>SUBMIT</SmallButton>
      </div>
    </>
  );
}

interface LabeledProps {
  children: ReactNode;
  text: string;
  className?: string;
}

function LabeledComponent({ children, text, className = "" }: LabeledProps) {
  return (
    <div className={`LabeledComponent ${className}`}>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default PitScoutMain;
