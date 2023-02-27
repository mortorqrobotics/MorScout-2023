import React, { useEffect, useState } from "react";
import Star from "./Star";
import "./StarSelector.css";

interface Props {
  onChange?: (newRating: number) => void;
}

function StarSelector({ onChange = () => {} }: Props) {
  let [rating, setRating] = useState(0);

  let handleClick = (i: number) => {
    if (i + 1 === rating && rating !== 0) return setRating(0);
    setRating(i + 1);
  };

  useEffect(() => {
    onChange(rating);
  }, [rating]);

  return (
    <div className="StarSelector">
      {new Array(5).fill(0).map((_, i) => {
        return <Star isSelected={i < rating} onClick={() => handleClick(i)} key={i}></Star>;
      })}
    </div>
  );
}

export default StarSelector;
