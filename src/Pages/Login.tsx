import React from "react";
import { useParams } from "react-router-dom";
import "./Login.css";

function Login() {
  let { match, team } = useParams();

  return <div className="Login">{`${match} ${team}`}</div>;
}

export default Login;
