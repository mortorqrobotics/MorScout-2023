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
  let {
    setPage,
    updateFormValue,
    weight,
    drivetrain,
    scoring_position,
    preferred_game_piece,
    intake,
    knocked_over_cones,
    preferred_pickup_area,
    preferred_substation,
    auto_charge_station,
    auto_community,
    end_game,
    defense,
    comments,
  } = useContext(PitContext);

  return (
    <>
      <BackArrow></BackArrow>
      <div className="PitScoutMain">
        <h1>PIT SCOUT</h1>

        <LabeledComponent text={"WEIGHT (LBS):"}>
          <InputBox
            inputmode="numeric"
            defaultValue={weight}
            updateText={(newWeight) => updateFormValue("weight", newWeight)}
          ></InputBox>
        </LabeledComponent>
        <LabeledComponent text={"DRIVETRAIN:"}>
          <Dropdown
            options={["Swerve Drive", "West coast/Tank drive", "Omni", "Mecanum"]}
            defaultOption={drivetrain}
            handleChange={(newOption) => updateFormValue("drivetrain", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED SCORING POSITION:"}>
          <Dropdown
            options={["Bottom", "Middle", "Top", "No preference"]}
            defaultOption={scoring_position}
            handleChange={(newOption) => updateFormValue("scoring_position", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED GAME PIECE:"}>
          <Dropdown
            options={["Cone", "Cube", "No preference"]}
            defaultOption={preferred_game_piece}
            handleChange={(newOption) => updateFormValue("preferred_game_piece", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"INTAKE?"}>
          <Dropdown
            options={["Yes", "No"]}
            defaultOption={intake === true ? "Yes" : "No"}
            handleChange={(newOption) =>
              updateFormValue("intake", newOption === "Yes" ? true : false)
            }
          />
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
            defaultOption={knocked_over_cones}
            handleChange={(newOption) => updateFormValue("knocked_over_cones", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED PICKUP AREA"}>
          <Dropdown
            options={["Floor", "Substation platform", "No preference"]}
            defaultOption={preferred_pickup_area}
            handleChange={(newOption) => updateFormValue("preferred_pickup_area", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"PREFERRED SUBSTATION"}>
          <Dropdown
            options={["Single substation", "Double substation", "No preference"]}
            defaultOption={preferred_substation}
            handleChange={(newOption) => updateFormValue("preferred_substation", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"PIECES SCORED IN AUTO:"}>
          <Dropdown
            options={new Array(8).fill(0).map((_, i) => i.toString())}
            defaultOption={auto_community?.toString()}
            handleChange={(newOption) => updateFormValue("auto_community", parseInt(newOption))}
          />
        </LabeledComponent>
        <LabeledComponent text={"AUTO CHARGE STATION:"}>
          <Dropdown
            options={["Docked", "Engaged", "None"]}
            defaultOption={auto_charge_station}
            handleChange={(newOption) => updateFormValue("auto_charge_station", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"IDEAL INDIVIDUAL GAME:"}>
          <SmallButton onClick={() => setPage(PitPages.IdealCommunity)}>TO GRID</SmallButton>
        </LabeledComponent>
        <LabeledComponent text={"END GAME:"}>
          <Dropdown
            options={["Docked", "Engaged", "None"]}
            defaultOption={end_game}
            handleChange={(newOption) => updateFormValue("end_game", newOption)}
          />
        </LabeledComponent>
        <LabeledComponent text={"DEFENSE SCORE:"}>
          <StarSelector
            defaultRating={defense}
            onChange={(newRating) => updateFormValue("defense", newRating)}
          ></StarSelector>
        </LabeledComponent>
        <LabeledComponent text={"GENERAL COMMENTS:"}>
          <CommentBox
            useLabel={false}
            defaultValue={comments}
            onChange={(newComment) => updateFormValue("comments", newComment)}
          ></CommentBox>
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
