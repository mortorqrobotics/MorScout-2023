import React from "react";
import "./Star.css";

interface Props {
  isSelected?: boolean;
  onClick: () => void;
}

function Star({ isSelected = false, onClick }: Props) {
  return (
    <svg
      width="50"
      height="48"
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M25 0L30.8374 17.9656H49.7275L34.4451 29.0689L40.2824 47.0344L25 35.9311L9.71758 47.0344L15.5549 29.0689L0.272532 17.9656H19.1626L25 0Z"
        fill={`#${isSelected ? "C9C3C3" : "25262A"}`}
        className="Star"
      />
    </svg>
  );
}

export default Star;
