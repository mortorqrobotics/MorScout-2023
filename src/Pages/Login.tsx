import InputBox from "Components/General/InputBox";
import SmallButton from "Components/General/SmallButton";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Login.css";

enum PageOptions {
  Match,
  Pit,
}

interface Params {
  page: PageOptions;
}

function Login({ page }: Params) {
  let params = useParams();
  let [name, setName] = useState("");
  let navigate = useNavigate();

  let handleSubmit = () => {
    if (page === PageOptions.Match) {
      return navigate(`/match/${params.match}/${params.team}/${encodeURIComponent(name)}/scout`);
    }

    return navigate(`/pit/${params.team}/${encodeURIComponent(name)}/scout`);
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
export { PageOptions };
