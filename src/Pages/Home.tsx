import React from "react";
import LargeButton from "Components/General/LargeButton";
import { ReactComponent as MorscoutLogo } from "Assets/morscoutLogo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <MorscoutLogo className="logo"></MorscoutLogo>
      <div className="homeButtons">
        <LargeButton to="/match/matches">match scout</LargeButton>
        <LargeButton to="/pit/teams">pit scout</LargeButton>
        <LargeButton to="/admin">admin</LargeButton>
      </div>
    </div>
  );
}

export default Home;
