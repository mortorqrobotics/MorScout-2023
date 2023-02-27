import React from "react";
import { ReactComponent as BackButton } from "Assets/backButton.svg";
import "./BackArrow.css";
import { useNavigate } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

function BackArrow({ onClick }: Props) {
  const navigate = useNavigate();

  let handleClick = () => {
    if (onClick) return onClick();
    navigate(-1);
  };

  return (
    <div className="BackArrow">
      <BackButton onClick={handleClick} />
    </div>
  );
}

export default BackArrow;
