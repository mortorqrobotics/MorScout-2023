import React from "react";
import "./SmallButton.css";

interface Props {
  children: string;
  onClick?: () => void;
  to?: string;
  disabled?: boolean;
}

function SmallButton({ children: buttonText, onClick = () => {}, disabled = false }: Props) {
  return (
    <div
      className="SmallButton"
      onClick={() => (!disabled ? onClick() : undefined)}
      style={disabled ? { border: "3px solid var(--highlight-gray)" } : {}}
    >
      {buttonText}
    </div>
  );
}

export default SmallButton;
