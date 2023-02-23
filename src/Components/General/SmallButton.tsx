import React from "react";
import "./SmallButton.css";

interface Props {
  children: string;
  onClick?: () => void;
  to?: string;
}

function SmallButton({ children: buttonText, onClick = () => {} }: Props) {
  return (
    <div className="SmallButton" onClick={onClick}>
      {buttonText}
    </div>
  );
}

export default SmallButton;
