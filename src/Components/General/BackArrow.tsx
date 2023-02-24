import React from "react";
import { ReactComponent as BackButton } from "Assets/backButton.svg";
import "./BackArrow.css";
import { useNavigate } from "react-router-dom";

function BackArrow() {
  const navigate = useNavigate();

  return (
    <div className="BackArrow">
      <BackButton onClick={() => navigate(-1)} />
    </div>
  );
}

export default BackArrow;
