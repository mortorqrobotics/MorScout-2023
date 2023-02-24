import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <input className="Slider" type="range" min="0" max="5" defaultValue="0" />
    </div>
  );
}

export default Slider;
