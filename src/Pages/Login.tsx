import InputBox from "Components/General/InputBox";
import SmallButton from "Components/General/SmallButton";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Login.css";

function Login() {
  let { match, team } = useParams();
  let [name, setName] = useState("");
  let navigate = useNavigate();

  let handleSubmit = () => {
    navigate(`/match/${match}/${team}/scout`, { state: { user: name } });
  };

  return (
    <div className="Login">
      <p>NAME:</p>
      <InputBox onSubmit={handleSubmit} updateText={setName}></InputBox>
      <SmallButton onClick={handleSubmit}>CONTINUE</SmallButton>
    </div>
  );
}

export default Login;
