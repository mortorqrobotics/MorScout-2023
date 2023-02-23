import React from "react";
import { useNavigate } from "react-router-dom";
import "./LargeButton.css";

interface Props {
  children: string;
  onClick?: () => void;
  to?: string;
}

function LargeButton({ children: buttonText, onClick = () => {}, to }: Props) {
  let navigate = useNavigate();
  return (
    <div
      className="LargeButton"
      onClick={() => {
        if (to) navigate(to);
        else onClick();
      }}
    >
      {buttonText}
    </div>
  );
}

export default LargeButton;
