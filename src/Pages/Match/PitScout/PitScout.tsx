import React from "react";
import "./PitScout.css";
import { useParams } from "react-router-dom";
import InputBox from "Components/General/InputBox";

function PitScout() {
  let { team } = useParams();

  return (
    <div className="PitScout">
      <p>PIT SCOUT</p>
      <InputBox updateText={(t) => console.log(t)}></InputBox>
    </div>
  );
}

export default PitScout;
