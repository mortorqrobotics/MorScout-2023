import React from "react";
import "./SmallButton.css";

interface Props {
  children: string;
  isRed?: boolean;
}

function SmallButton({ children: buttonText, isRed = true }: Props) {
  return (
    <div
      className="SmallButton"
      style={{ backgroundColor: `var(--${isRed ? "red" : "blue"})` }}
    >
      {buttonText}
    </div>
  );
}

export default SmallButton;
