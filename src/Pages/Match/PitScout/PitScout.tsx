import React from "react";
import "./PitScout.css";
import { useParams } from "react-router-dom";
import InputBox from "Components/General/InputBox";
import type { ReactNode } from "react";
import DropdownFunction from "../../../Components/General/Dropdown";

function PitScout() {
  let { team } = useParams();

  return (
    <div className="PitScout">
      <h1>PIT SCOUT</h1>

      <LabledComponent text={"WEIGHT:"}>
        <InputBox updateText={() => {}}></InputBox>
      </LabledComponent>
      <LabledComponent text={"DRIVETRAIN:"}>
        <DropdownFunction />
      </LabledComponent>
      <LabledComponent text={"# OF DRIVETRAIN MOTORS:"}>
        <DropdownFunction />
      </LabledComponent>
      <LabledComponent text={"PREFERRED SCORING POSITION:"}>
        <InputBox updateText={() => {}}></InputBox>
      </LabledComponent>
      <LabledComponent text={"INTAKE?"}>
        <InputBox updateText={() => {}}></InputBox>
      </LabledComponent>
    </div>
  );
}

interface LabledProps {
  children: ReactNode;
  text: string;
  className?: string;
}

function LabledComponent({ children, text, className = "" }: LabledProps) {
  return (
    <div className={`LabledComponent ${className}`}>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default PitScout;
