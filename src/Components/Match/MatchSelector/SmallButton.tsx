import React from "react";
import { useNavigate } from "react-router-dom";
import "./SmallButton.css";

interface Props {
  children: string;
  isRed?: boolean;
  to?: string;
}

function SmallButton({ children: buttonText, isRed = true, to = "" }: Props) {
  let navigate = useNavigate();

  return (
    <div
      className="SmallButton"
      style={{ backgroundColor: `var(--${isRed ? "red" : "blue"})` }}
      onClick={() => navigate(to)}
    >
      {buttonText}
    </div>
  );
}

export default SmallButton;
